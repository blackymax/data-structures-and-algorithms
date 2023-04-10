export interface EdgeModel<T> {
    from: T;
    to: T;
    weight: number;
}