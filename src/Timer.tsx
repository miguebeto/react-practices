import React, { useState, useEffect, useRef } from 'react';
type TimerArgs = {
  seg: number;
  segundos?: number;
};

export const Timer = ({ seg }: TimerArgs) => {
  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timeout>();
  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSegundos((s) => s + 1), seg);
  }, [seg]);
  return (
    <div>
      <h4>
        Timer <small>{segundos}</small>{' '}
      </h4>
    </div>
  );
};
