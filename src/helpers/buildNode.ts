import { BoundNodeModel } from "../factory/BoundNodeModel";
import { Item } from "../models/item";
import randomInteger from "./randomInteger";

export default function buildNode(item: Item, index: number) {
    const node = new BoundNodeModel({
        item,
        name: item.name,
        color: item.type === "agent" ? "darkorchid" : "darkorange",
        type: "boundNode"
    });
    node.setPosition(randomInteger(1024), randomInteger(768));

    return node;
}
