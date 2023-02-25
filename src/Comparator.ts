import { Comparable } from "./Comparable";

export interface Comparator<T> {
  compare: (first: T, second: T) => number;
}
