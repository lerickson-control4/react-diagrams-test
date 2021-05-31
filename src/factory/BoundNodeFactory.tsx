import * as React from 'react';
import {
  AbstractReactFactory,
  GenerateWidgetEvent,
  GenerateModelEvent,
} from '@projectstorm/react-canvas-core';
import {DiagramEngine} from '@projectstorm/react-diagrams-core';
import BoundNode from '../components/BoundNode';
import {BoundNodeModel} from './BoundNodeModel';

export class BoundNodeFactory extends AbstractReactFactory<
  BoundNodeModel,
  DiagramEngine
> {
  constructor() {
    super('boundNode');
  }

  generateReactWidget(event: GenerateWidgetEvent<BoundNodeModel>): JSX.Element {
    console.log('generating widget');
    return <BoundNode engine={this.engine} node={event.model} />;
  }

  generateModel(event: GenerateModelEvent) {
    console.log('generating model');
    return new BoundNodeModel(event.initialConfig);
  }
}
