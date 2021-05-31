import Binding from "./binding";
import { DataType } from "./dataType";

export interface Variable<T> {
    name: string;
    type: DataType;
    value: T;
    bindings: Binding[];
}
