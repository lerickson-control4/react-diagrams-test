import { LogicalOperator } from "typescript";
import Condition from "./condition";
import Binding from './binding';

export default interface ConditionalGateway {
    name: string;
    conditions: Condition[];
    logicalOperator: LogicalOperator;

    bindings: Binding[];
}

