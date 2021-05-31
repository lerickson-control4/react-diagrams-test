import { Item } from "./item";
import { Variable } from "./variable";

export enum Comparator {
    equals,
    notEquals,
    greaterThan,
    greaterThanOrEqualTo,
    lessThan,
    lessThanOrEqualTo
}

export default interface Condition {
    state: Variable<any>; /// | Schedule
    comparator: Comparator;
}
