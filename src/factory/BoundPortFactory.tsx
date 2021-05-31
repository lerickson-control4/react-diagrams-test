import {DiagramEngine, PortModel} from '@projectstorm/react-diagrams';
import {
  AbstractModelFactory,
  GenerateModelEvent,
  GenerateWidgetEvent,
} from '@projectstorm/react-canvas-core';
import BoundPortModel from './BoundPortModel';
import BoundPort from '../components/BoundPort';

export class BoundPortFactory extends AbstractModelFactory<
  PortModel,
  DiagramEngine
> {
  cb: (initialConfig?: any) => PortModel;

  constructor(type: string, cb: (initialConfig?: any) => BoundPortModel) {
    super(type);
    this.cb = cb;
  }

  generateReactWidget(event: GenerateWidgetEvent<BoundPortModel>): JSX.Element {
    console.log('generating port widget');
    const {item, port} = event.model;
    return <BoundPort name={item?.name} item={item} port={port} />;
  }

  generateModel(event: GenerateModelEvent): PortModel {
    return this.cb(event.initialConfig);
  }
}
