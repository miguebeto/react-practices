import React, {useState} from 'react';
import { Timer } from './Timer';

export const TimerPadre = () => {
  const [seg, setSeg] = useState(1000)
  return (
    <div>
      <span>Milisegundos {seg}</span>
      <Timer seg={seg}/>
      <button className="btn btn-outline-success" onClick={()=>setSeg(1000)}>1000</button>
      <button onClick={()=>setSeg(2000)} className="btn btn-outline-success">2000</button>
    </div>
  );
};
