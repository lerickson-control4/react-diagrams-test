import { BoundNodeModel } from "../factory/BoundNodeModel";
import { Item } from "../models/item";
import buildPorts from "./buildPorts";
import randomInteger from "./randomInteger";

export default function buildNode(item: Item, index: number) {
    const node = new BoundNodeModel({
        item,
        name: item.name,
        color: item.type === "agent" ? "darkorchid" : "darkorange",
        type: "boundNode"
    });
    node.setPosition(randomInteger(1024), randomInteger(768));

    const inPorts = buildInPorts(item);
    inPorts.forEach(port => node.addPort(port));

    const outPorts = buildOutPorts(item);
    outPorts.forEach(port => node.addPort(port));

    return node;
}
