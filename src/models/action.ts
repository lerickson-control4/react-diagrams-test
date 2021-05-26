import { Command } from "./command";


export interface Action {
    deviceId: number;
    command: Command
}