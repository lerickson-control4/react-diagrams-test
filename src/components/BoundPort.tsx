import {BoundPortModelOptions} from '../factory/BoundPortModel';

import './BoundPort.scss';

export default function BoundPort(props: BoundPortModelOptions) {
  const {item, port} = props;

  return (
    <div className={`port ${port.bindings ? 'bound' : ''}`}>
      <div className="icon">{item?.type.toUpperCase().charAt(0)}</div>
      <div className="label">{port.name}</div>
    </div>
  );
}
