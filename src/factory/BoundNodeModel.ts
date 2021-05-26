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
    public item?: Item;

    constructor(options: BoundNodeModelOptions) {
        super(options);
        this.item = options.item;
    }
}

// export interface DefaultNodeModelOptions extends BasePositionModelOptions {
//     name?: string;
//     color?: string;
// }
// export interface DefaultNodeModelGenerics extends NodeModelGenerics {
//     OPTIONS: DefaultNodeModelOptions;
// }
// export declare class DefaultNodeModel extends NodeModel<DefaultNodeModelGenerics> {
//     protected portsIn: DefaultPortModel[];
//     protected portsOut: DefaultPortModel[];
//     constructor(name: string, color: string); F
//     constructor(options?: DefaultNodeModelOptions);
//     doClone(lookupTable: {}, clone: any): void;
//     removePort(port: DefaultPortModel): void;
//     addPort<T extends DefaultPortModel>(port: T): T;
//     addInPort(label: string, after?: boolean): DefaultPortModel;
//     addOutPort(label: string, after?: boolean): DefaultPortModel;
//     deserialize(event: DeserializeEvent<this>): void;
//     serialize(): any;
//     getInPorts(): DefaultPortModel[];
//     getOutPorts(): DefaultPortModel[];
// }
