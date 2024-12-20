import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Text } from '@react-three/drei';

const TechBox = ({ text, position, color }) => {
  const meshRef = useRef();

  
  return (
    <group 
      ref={meshRef}
      position={position}
      onPointerOver={(e) => {
        document.body.style.cursor = 'pointer';
        e.stopPropagation();
        if (meshRef.current) {
          meshRef.current.scale.set(1.2, 1.2, 1.2);
        }
      }}
      onPointerOut={(e) => {
        document.body.style.cursor = 'default';
        e.stopPropagation();
        if (meshRef.current) {
          meshRef.current.scale.set(1, 1, 1);
        }
      }}
    >
      <Box args={[1, 1, 1]}>
        <meshPhongMaterial 
          color={color} 
          opacity={0.7}
          transparent
          shininess={100}
        />
      </Box>
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

const TechStack3D = () => {
  const technologies = [
    { name: 'React', position: [-7, 0, 0], color: '#61DAFB' },
    { name: 'HTML', position: [-5, 0, 0], color: '#E34F26' },
    { name: 'CSS', position: [-3, 0, 0], color: '#1572B6' },
    { name: 'Tailwind', position: [-1, 0, 0], color: '#38B2AC' },
    { name: 'Docker', position: [1, 0, 0], color: '#2496ED' },
    { name: 'Node', position: [3, 0, 0], color: '#339933' },
    { name: 'Express', position: [5, 0, 0], color: '#000000' },
    { name: 'Nest', position: [7, 0, 0], color: '#E0234E' }
  ];

  return (
    <div className="tech-stack-3d">
      <Canvas
        camera={{ position: [0, 1.5, 12], fov: 25 }}
        style={{ height: '250px' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          {technologies.map((tech, index) => (
            <TechBox
              key={index}
              text={tech.name}
              position={tech.position}
              color={tech.color}
            />
          ))}
        </Suspense>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default TechStack3D; 