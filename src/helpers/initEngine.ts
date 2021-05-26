
import createEngine, {
    DiagramModel,
} from '@projectstorm/react-diagrams';
import { BoundNodeFactory } from '../factory/BoundNodeFactory';
import { Item } from '../models/item';
import buildNode from './buildNode';
import getItems from './getItems';

const initEngine = () => {

    console.log('initEngine');
    //1) setup the diagram engine
    var engine = createEngine();

    const factory = new BoundNodeFactory();
    engine.getNodeFactories().registerFactory(factory);

    //2) setup the diagram model
    var model = new DiagramModel();

    //3) build and add the nodes
    const nodes = getItems().map((item: Item, index: number) => buildNode(item, index));
    model.addAll(...nodes);

    //4) load model into engine
    engine.setModel(model);

    return engine;
}

export default initEngine;
