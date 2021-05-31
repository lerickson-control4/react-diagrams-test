import React from 'react';
import {DiagramEngine, PortWidget} from '@projectstorm/react-diagrams-core';
import {BoundNodeModel} from '../factory/BoundNodeModel';

import './BoundNode.scss';
import BoundPort from './BoundPort';

export interface BoundNodeProps {
  node: BoundNodeModel;
  engine: DiagramEngine;
}

export default function BoundNode(props: BoundNodeProps) {
  console.log(props);
  const {item} = props.node.getOptions();
  const {engine} = props;

  const portsMap = props.node.getPorts();
  const ports = Object.keys(portsMap).map((key) => portsMap[key]);
  const inPorts = ports.filter((port) => port.item);

  return (
    <>
      {item && (
        <div className={`node ${item.type}`}>
          <div className="header">
            <div className="name">{item.name}</div>
            <div className="location">{item.location}</div>
          </div>
          <div className="ports">
            <div className="inputs">
              {ports.map((port) => (
                <PortWidget engine={engine} port={port}>
                  <div className="port">
                    <header>
                      <div className="name">{port.getName()}</div>
                    </header>
                  </div>
                </PortWidget>
              ))}
            </div>
            <div className="outputs">
              <div className="events"></div>
              <div className="varaibles"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
