import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const maximun_count = 10;

//1
export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  //2
  const counterRef = useRef<HTMLHeadingElement>(null);

  //3
  useEffect(() => {
    if (counter < 10) return;
    console.log(
      "%cHas llegado al conteo peligroso",
      "color:red; background-color:black"
    );

    //4
    // gsap
    //   .to(counterRef.current, { y: -10, duration: 0.5, ease: "ease.out" })
    //   .then(() => {
    //     gsap.to(counterRef.current, { y: 0, duration: 1, ease: "bounce.out" });
    //   });
  }, [counter]);

  //4
  const timeLine = gsap.timeline();

  timeLine.to(counterRef.current, { y: -10, duration: 0.5, ease: "ease.out" });
  timeLine.to(counterRef.current, { y: 0, duration: 1, ease: "bounce.out" });

  //5
  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maximun_count));
  };

  return (
    <div className="counter">
      <h1>Counter:</h1>
      <h2 ref={counterRef}>{counter}</h2>
      <br />
      <button className="btn btn-outline-primary" onClick={handleClick}>
        +1
      </button>
    </div>
  );
};
