// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import Script from 'next/script';

// interface GlobeBackgroundProps {
//   selector?: string;
//   color?: number;
//   backgroundColor?: number;
//   size?: number;
//   minHeight?: number;
//   minWidth?: number;
//   scale?: number;
//   scaleMobile?: number;
// }

// const GlobeBackground: React.FC<GlobeBackgroundProps> = ({
//   selector = '#globe-container',
//   color = 0xffffff,
//   backgroundColor = 0x000000,
//   size = 1,
//   minHeight = 200,
//   minWidth = 500,
//   scale = 1.0,
//   scaleMobile = 1.0,
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [vantaEffect, setVantaEffect] = useState<any>(null);
//   const [scriptsLoaded, setScriptsLoaded] = useState({
//     three: false,
//     vanta: false
//   });

//   // Initialize the globe effect
//   useEffect(() => {
//     // Skip if not in browser or if scripts haven't loaded yet
//     if (typeof window === 'undefined') return;
//     if (!scriptsLoaded.three || !scriptsLoaded.vanta || !containerRef.current) return;
    
//     // Only create effect if it doesn't exist yet
//     if (!vantaEffect) {
//       try {
//         // @ts-ignore - VANTA is loaded from external script
//         const effect = window.VANTA.GLOBE({
//           el: containerRef.current,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: minHeight,
//           minWidth: minWidth,
//           scale: scale,
//           scaleMobile: scaleMobile,
//           color: color,
//           size: size,
//           backgroundColor: backgroundColor,
//         });
        
//         setVantaEffect(effect);
//       } catch (error) {
//         console.error("Failed to initialize VANTA effect:", error);
//       }
//     }
    
//     // Clean up the effect when component unmounts
//     return () => {
//       if (vantaEffect) {
//         try {
//           vantaEffect.destroy();
//         } catch (error) {
//           console.error("Error destroying VANTA effect:", error);
//         }
//       }
//     };
//   }, [scriptsLoaded, containerRef, backgroundColor, color, minHeight, minWidth, scale, scaleMobile, size, vantaEffect]);

//   // Handle script loading
//   const handleThreeLoaded = () => {
//     setScriptsLoaded(prev => ({ ...prev, three: true }));
//   };

//   const handleVantaLoaded = () => {
//     setScriptsLoaded(prev => ({ ...prev, vanta: true }));
//   };

//   return (
//     <>
//       {/* Load Three.js with strategy to ensure client-side only */}
//       <Script
//         src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
//         strategy="afterInteractive"
//         onLoad={handleThreeLoaded}
//       />
      
//       {/* Load Vanta.js with strategy to ensure client-side only */}
//       <Script
//         src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"
//         strategy="afterInteractive"
//         onLoad={handleVantaLoaded}
//       />
      
//       {/* Container for the globe effect */}
//       <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: '300px' }} />
//     </>
//   );
// };

// // No need for dynamic here as this file will be dynamically imported
// export default GlobeBackground;









"use client"; // Ensure this runs only in the browser

import { useEffect, useRef } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";

const GlobeBackground = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    let vantaEffect: any;
    if (typeof window !== "undefined") {
      vantaEffect = GLOBE({
        el: globeRef.current,
        THREE, // Ensure three.js is properly passed
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 800.0,
        minWidth: 800.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0, // Dark background
        color: 0xffffff, // White globe
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={globeRef} className="w-full h-full absolute inset-0" />;
};

export default GlobeBackground;
