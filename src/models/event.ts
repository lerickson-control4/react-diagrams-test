import Binding from "./binding";

export interface Event {
    name: string;
    bindings: Binding[];
}
