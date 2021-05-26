import { Action } from "./action";

export interface Event {
    name: string;
    actions: Action[];
}
