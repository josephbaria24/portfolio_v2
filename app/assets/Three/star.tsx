// "use client";
// import { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";
// import { Group } from "three"; // Remove unused BufferAttribute import

// // Define the props type
// interface StarsProps {
//   radius?: number;
//   color?: string;
// }

// const Stars: React.FC<StarsProps> = (props) => {
//   const ref = useRef<Group | null>(null);
//   const [sphere] = useState(() =>
//     random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 })
//   );

//   useFrame((state, delta) => {
//     if (ref.current) {
//       ref.current.rotation.x -= delta / 10;
//       ref.current.rotation.y -= delta / 15;
//     }
//   });

//   return (
//     <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
//       <Points positions={sphere} stride={3} frustumCulled {...props}>
//         <pointsMaterial
//           transparent
//           color={"#f272c8"}
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas: React.FC = () => {
//   return (
//     <div className="w-full h-auto absolute inset-0 z-[-1]">
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;