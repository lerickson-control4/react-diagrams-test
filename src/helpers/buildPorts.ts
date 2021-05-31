import BoundPortModel, { BoundPortModelOptions } from "../factory/BoundPortModel";
import { Item } from "../models/item";
import { PortType } from "../models/portType";
import { Command } from '../models/command';
import { PortModelAlignment } from "@projectstorm/react-diagrams-core";

const buildPort = (item: Item, port: PortType, isIn: boolean = false) => {
    return new BoundPortModel({
        name: port.name,
        item,
        port,
        in: isIn,
        // alignment: isIn ? PortModelAlignment.RIGHT : PortModelAlignment.LEFT
    })
}

export default function buildPorts(item: Item) {
    const ports: BoundPortModel[] = [];
    if (item.commands) {
        ports.concat(item.commands.map(command => buildPort(item, command, true)));
    }

    if (item.events) {
        ports.concat(item.commands.map(command => buildPort(item, command)));
    }

    if (item.variables) {
        ports.concat(item.commands.map(command => buildPort(item, command)));
    }

    return ports;
}
