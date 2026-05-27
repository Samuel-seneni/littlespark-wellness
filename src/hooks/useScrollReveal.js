import { useEffect, useRef } from "react";

const useScrollReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    element.classList.add("reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useScrollReveal;