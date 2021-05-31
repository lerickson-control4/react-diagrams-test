import { PortType } from "./portType";

export default interface Binding {
    otherType: string;
    other: PortType;
}