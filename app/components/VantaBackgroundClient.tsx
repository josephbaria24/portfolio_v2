"use client"; // ✅ Ensures this runs only in the browser

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const VantaBackgroundClient = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // ✅ Prevent execution on the server

    import("p5").then((p5) => {
      import("vanta/dist/vanta.globe.min").then((GLOBE) => {
        if (!vantaEffect && vantaRef.current) {
          setVantaEffect(
            GLOBE.default({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0xffffff,
              size: 0.7,
              backgroundColor: 0x000000,
              THREE: THREE, // Pass Three.js manually
              p5: p5.default, // Pass p5 manually
            })
          );
        }
      });
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0 z-0"></div>;
};

export default VantaBackgroundClient;
