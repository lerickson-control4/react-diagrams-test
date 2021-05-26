import { DataType } from "./dataType";
import { Parameter } from "./parameter";

export interface Command {
    name: string;
    params: Parameter<DataType>[];
}