import { Command } from "./command";
import { DataType } from "./dataType";
import { Event } from "./event";
import { Variable } from "./variable";

export type PortType = Command | Variable<DataType> | Event;