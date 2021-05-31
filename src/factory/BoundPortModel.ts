import { PortModel } from "@projectstorm/react-diagrams-core";
import { DefaultPortModelGenerics, DefaultPortModelOptions } from "@projectstorm/react-diagrams-defaults";
import { Item } from "../models/item";
import { PortType } from "../models/portType";

export interface BoundPortModelOptions extends DefaultPortModelOptions {
    item: Item;
    port: PortType;
}

export interface BoundPortModelGenerics extends DefaultPortModelGenerics {
    OPTIONS: BoundPortModelOptions;
}

export default class BoundPortModel extends PortModel<BoundPortModelGenerics> {
    public item: Item;
    public port: PortType;

    constructor(config: BoundPortModelOptions) {
        super(config);
        this.item = config.item;
        this.port = config.port;
    }
}