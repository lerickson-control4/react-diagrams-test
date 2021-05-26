import { DataType } from "./dataType";

export interface Variable<T> {
    name: string;
    type: DataType;
    value: T;
}
