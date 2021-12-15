// 1
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// 2
const maximun_count = 10;

export const useCounter = () => {
  // 3
  const [counter, setCounter] = useState(5);
  const counterRef = useRef<HTMLHeadingElement>(null);

  // 4
  useEffect(() => {
    if (counter < 10) return;
    console.log(
      "%cHas llegado al conteo peligroso",
      "color:red; background-color:black"
    );
  }, [counter]);

  // 5
  const timeLine = gsap.timeline();

  timeLine.to(counterRef.current, { y: -10, duration: 0.5, ease: "ease.out" });
  timeLine.to(counterRef.current, { y: 0, duration: 1, ease: "bounce.out" });

  // 6
  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maximun_count));
  };

  // 7
  return {
    counter,
    counterRef,
    handleClick
  };
};
