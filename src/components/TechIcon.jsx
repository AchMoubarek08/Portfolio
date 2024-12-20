import React from 'react';
import { useGLTF } from '@react-three/drei';

export function TechIcon({ name, position }) {
  const model = useGLTF(`/models/${name}.gltf`);
  
  return (
    <mesh position={position}>
      <primitive 
        object={model.scene} 
        scale={0.5}
        onPointerOver={(e) => {
          document.body.style.cursor = 'pointer';
          e.stopPropagation();
        }}
        onPointerOut={(e) => {
          document.body.style.cursor = 'auto';
          e.stopPropagation();
        }}
      />
    </mesh>
  );
} 