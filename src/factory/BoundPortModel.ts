import { DefaultPortModel, DefaultPortModelOptions } from "@projectstorm/react-diagrams-defaults";
import { Command } from "../models/command";
import { DataType } from "../models/dataType";
import { Event } from "../models/event";
import { Item } from "../models/item";
import { PortType } from "../models/portType";
import { Variable } from "../models/variable";

export interface BoundPortModelProps {
    item: Item;
    port: Command | Variable<DataType> | Event;
}

export default class BoundPortModel extends DefaultPortModel implements BoundPortModelProps {
    public item: Item;
    public port: PortType;

    constructor(item: Item, port: PortType, config: DefaultPortModelOptions) {
        super(config);
        this.item = item;
        this.port = port;
    }

}