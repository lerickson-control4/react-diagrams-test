import { DataType } from "./dataType";

export interface Parameter<T> {
    name: string;
    type: DataType;
    value: T;
}