import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const AnimatedTextLines = ({ text, className }) => {
  const line = text.split("\n").filter((line) => line.trim() !== "");
  const containerRef = useRef(null);
  const LineRefs = useRef([]);

  useGSAP(() => {
    if (LineRefs.current.length > 0) {
      gsap.from(LineRefs.current, {
        y: 100,
        stagger: 0.3,
        opacity: 0,
        duration: 1,
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current,
        },
      });
    }
  });

  return (
    <div ref={containerRef} className={className}>
      {line.map((line, index) => (
        <span
          className="block leading-relaxed tracking-wide text-pretty"
          key={index}
          ref={(el) => (LineRefs.current[index] = el)}
        >
          {line}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTextLines;
