import { Command } from "./command";
import { DataType } from "./dataType";
import { Event } from "./event";
import { Variable } from "./variable";
import ConditionalGateway from "./conditional-gateway";

export type PortType = Command | Variable<DataType> | Event | ConditionalGateway;

