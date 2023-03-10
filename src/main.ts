import {
  Either,
  fromPromise,
  ap,
  right,
  getOrElse,
  flatten,
  left,
} from "./fp/either";
import { pipe } from "./fp/utils";
import { fetchClient, fetchExecutor } from "./fetching";
import { ClientUser, ExecutorUser } from "./types";
import { fromNullable, isNone, isSome } from "./fp/maybe";
import { map, sort } from "./fp/array";
import { distance } from "./utils";
import { setoidString } from "./fp/setoid";
import { fromCompare, revert } from "./fp/ord";

type Response<R> = Promise<Either<string, R>>;

const getExecutor = (): Response<ExecutorUser> => fromPromise(fetchExecutor());
const getClients = (): Response<Array<ClientUser>> =>
  fromPromise(
    fetchClient().then(
      map((item) => ({ ...item, demands: fromNullable(item.demands) }))
    )
  );

export enum SortBy {
  distance = "distance",
  reward = "reward",
}

export const show =
  (sortBy: SortBy) =>
  (clients: Array<ClientUser>) =>
  (executor: ExecutorUser): Either<string, string> => {
    const matchedPosibilities = clients.filter((client) => {
      return isSome(client.demands)
        ? !!client.demands.value
            .map((demand) =>
              executor.possibilities?.length > 0
                ? executor.possibilities.includes(demand)
                : false
            )
            .filter((item) => item === true).length
        : isNone(client.demands);
    });

    const mappedClients = map(({ name, position, reward }) => ({
      name,
      distance: distance(position, executor.position),
      reward,
    }))(matchedPosibilities);

    const sortFunc = fromCompare((a, b) => {
      if (a[SortBy[sortBy]] === b[SortBy[sortBy]]) {
        return 0;
      } else {
        return a[SortBy[sortBy]] < b[SortBy[sortBy]] ? -1 : 1;
      }
    });

    const reversedSortFunc = fromCompare((a, b) => {
      if (a[SortBy[sortBy]] === b[SortBy[sortBy]]) {
        return 0;
      } else {
        return a[SortBy[sortBy]] < b[SortBy[sortBy]] ? 1 : -1;
      }
    });

    const sortedClients = sort(
      sortBy === SortBy.reward ? reversedSortFunc : sortFunc
    )(mappedClients);

    const mappedClientsToString = map(
      ({ name, distance, reward }) =>
        `name: ${name}, distance: ${distance}, reward: ${reward}`
    )(sortedClients);

    const matchedString =
      matchedPosibilities.length === clients.length
        ? "This executor meets all demands of all clients!"
        : `This executor meets the demands of only ${matchedPosibilities.length} out of ${clients.length} clients`;

    return matchedPosibilities.length
      ? right(
          `${matchedString}\n
Available clients sorted by ${
            sortBy === SortBy.distance
              ? `${SortBy.distance} to executor`
              : `highest ${SortBy.reward}`
          }:
${mappedClientsToString.join("\n")}`
        )
      : left(`This executor cannot meet the demands of any client!`);
  };

export const main = (sortBy: SortBy): Promise<string> =>
  Promise.all([getClients(), getExecutor()]) // Fetch clients and executor
    .then(([clients, executor]) =>
      pipe(
        /**
         * Since the "show" function takes two parameters, the value of which is inside Either
         * clients is Either<string, Array<Client>>, an executor is Either<string, Executor>. How to pass only Array<Client> and Executor to the show?
         * Either is an applicative type class, which means that we can apply each parameter by one
         */
        right(show(sortBy)), // Firstly, we need to lift our function to the Either
        ap(clients), // Apply first parameter
        ap(executor), // Apply second parameter
        flatten, // show at the end returns Either as well, so the result would be Either<string, Either<string, string>>. We need to flatten the result
        getOrElse((err) => err) // In case of any left (error) value, it would be stopped and show error. So, if clients or executor is left, the show would not be called, but onLeft in getOrElse would be called
      )
    );
