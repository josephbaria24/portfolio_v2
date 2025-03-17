'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import * as PIXI from 'pixi.js';

// Create a component that will only be loaded on the client side
const WaveAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  
  // Set isClient to true once component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    // Only run this effect when we're on the client and after the component has mounted
    if (!isClient || !containerRef.current) return;
    
    // Dynamically import PIXI.js only on the client side
    const loadPixi = async () => {
      const PIXI = await import('pixi.js');
      
      // Constants
      const TAU = Math.PI * 2;
      const HALF_PI = Math.PI / 2;
      
      // Custom Math function
      const SineInOut = (percent: number, amp: number): number => {
        return amp * (Math.sin(percent * TAU - HALF_PI) + 1) * 0.5;
      };
      
      // Variables
      let app: PIXI.Application;
      let graphics: PIXI.Graphics;
      let total_vertices = 6;
      let amplitud = 150;
      let width: number, height: number, halfHeight: number, space: number;
      
      // Bezier curve function
      function bezier(points: number[]) {
        let size = points.length;
        let last = size - 4;
        graphics.moveTo(points[0], points[1]);
        for (let i = 0; i < size - 2; i += 2) {
          let x0 = i ? points[i - 2] : points[0];
          let y0 = i ? points[i - 1] : points[1];
          let x1 = points[i + 0];
          let y1 = points[i + 1];
          let x2 = points[i + 2];
          let y2 = points[i + 3];
          let x3 = i !== last ? points[i + 4] : x2;
          let y3 = i !== last ? points[i + 5] : y2;
          let cp1x = x1 + (x2 - x0) / 6;
          let cp1y = y1 + (y2 - y0) / 6;
          let cp2x = x2 - (x3 - x1) / 6;
          let cp2y = y2 - (y3 - y1) / 6;
          graphics.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x2, y2);
        }
      }
      
      // Render function
      function render() {
        let time = new Date().getTime() * 0.001;
        graphics.clear();
        graphics.beginFill(0xFFFFFF);
        let points: number[] = [];
        for (let i = 0; i <= total_vertices; i++) {
          let x = space * i;
          let amp = Math.sin(time - i) * amplitud;
          let y = SineInOut(i / total_vertices, amp);
          points.push(x, halfHeight + y);
        }
        bezier(points);
        graphics.lineTo(width, height);
        graphics.lineTo(0, height);
        graphics.lineTo(0, halfHeight);
        graphics.endFill();
      }
      
      // Resize function
      function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        halfHeight = height / 2;
        space = width / total_vertices;
        app.renderer.resize(width, height);
      }
      
      // Initialize function
      function init() {
        if (!containerRef.current) return;
        
        // Create PIXI application
        app = new PIXI.Application({
          antialias: true,
          resolution: window.devicePixelRatio,
          backgroundAlpha: 0,
          background: 'transparent',
          // Explicitly create a canvas in the constructors
          view: document.createElement('canvas')
        });
        
        // Clear container first (for hot reloading)
        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(app.view as HTMLCanvasElement);
        
        // Create graphics
        graphics = new PIXI.Graphics();
        app.stage.addChild(graphics);
        
        // Initial resize
        resize();
        
        // Setup animation
        app.ticker.add(render);
        
        // Add resize event listener
        window.addEventListener("resize", resize);
      }
      
      // Initialize the app
      init();
      
      // Return cleanup function
      return () => {
        window.removeEventListener("resize", resize);
        if (app) {
          app.destroy(true, { children: true });
        }
      };
    };
    
    loadPixi();
  }, [isClient]); // Only run when isClient changes to true
  
  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0,
        overflow: 'hidden',
        background: '#000'
      }}
    />
  );
};

// Use dynamic import with ssr: false to ensure the component only renders on client
export default dynamic(() => Promise.resolve(WaveAnimation), { ssr: false });