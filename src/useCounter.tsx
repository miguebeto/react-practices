// 1
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// 2
export const useCounter = ({ maxCount = 10 }) => {
  // 3
  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<any>(null);

  // 4
  const timeLine = useRef(gsap.timeline());
  // 5
  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };
  //6
  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;
    timeLine.current.to(elementToAnimate.current, {
      y: -10,
      duration: 0.5,
      ease: "ease.out"
    });
    timeLine.current.to(elementToAnimate.current, {
      y: 0,
      duration: 1,
      ease: "bounce.out"
    });
    timeLine.current.pause();
  }, []);

  // 5
  useEffect(() => {
    // if (counter < 10) return;
    // console.log(
    //   "%cHas llegado al conteo peligroso",
    //   "color:red; background-color:black"
    // );

    if (counter < maxCount) return;
    timeLine.current.play(0);
  }, [counter]);

  // 7
  return {
    counter,
    elementToAnimate,
    handleClick
  };
};
