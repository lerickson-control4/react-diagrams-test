import { NodeModel } from "@projectstorm/react-diagrams-core";
import { DefaultNodeModelGenerics, DefaultNodeModelOptions } from "@projectstorm/react-diagrams-defaults";
import { Item } from "../models/item";


export interface BoundNodeModelOptions extends DefaultNodeModelOptions {
    item?: Item;
}

export interface BoundNodeModelGenerics extends DefaultNodeModelGenerics {
    OPTIONS: BoundNodeModelOptions;
}

export class BoundNodeModel extends NodeModel<BoundNodeModelGenerics> {

    constructor(options: BoundNodeModelOptions) {
        super(options);
    }
}
