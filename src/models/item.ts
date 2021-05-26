import { Command } from "./command";
import { Variable } from "./variable";
import { Event } from './event';
import { DataType } from "./dataType";

export type ItemType = "device" | "agent";

export interface Item {
    id: number;
    type: ItemType;
    name: string;
    location: string;
    commands: Command[];
    events: Event[];
    variables: Variable<DataType>[];
}