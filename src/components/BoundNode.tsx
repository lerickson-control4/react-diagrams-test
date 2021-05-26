import React from 'react';
import {DiagramEngine, NodeWidget} from '@projectstorm/react-diagrams-core';

import './BoundNode.scss';
import {BoundNodeModel} from '../factory/BoundNodeModel';

export interface BoundNodeProps {
  node: BoundNodeModel;
  engine: DiagramEngine;
  size?: number;
}

export default function BoundNode(props: BoundNodeProps) {
  console.log(props);
  const {item} = props.node;
  return (
    <NodeWidget node={props.node} diagramEngine={props.engine}>
      <div className={`node ${item?.type}`}>
        <div className="header">
          <div className="name">{item?.name}</div>
          <div className="location"></div>
        </div>
        <div className="ports">
          <div className="inputs"></div>
          <div className="outputs">
            <div className="events"></div>
            <div className="varaibles"></div>
          </div>
        </div>
      </div>
    </NodeWidget>
  );
}
