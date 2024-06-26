import { useEffect, useState, useRef } from "react";

/*
 * How component will receive this hooks ->
 * const [ref, isInView] = useInView({ threshold: 0.4 });
 * @params ref -> container that will be detected when in the viewport
 * @params isInView -> return true or false based on the ref
 */

/*
 * @params options -> receives two params:
 * 1. observerOpt -> {threshold: 0.1}, // when 0.1 -> 10% of the component is in view
 * 2. triggerOnce -> return true or false, and based on this deciding to observe the component once or multiple time.
 */

const useInView = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (options.triggerOnce) {
        // @for detecting viewport once
        if (entry.isIntersecting && !hasAnimated) {
          setIsIntersecting(true);
          setHasAnimated(true);
          observer.unobserve(ref.current); // Stop observing after it intersects
        }
      } else {
        // @for continuing in view port detecting
        setIsIntersecting(entry.isIntersecting);
      }
    }, options.observerOpt);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated, options.observerOpt]);

  return [ref, isIntersecting];
};

export default useInView;
