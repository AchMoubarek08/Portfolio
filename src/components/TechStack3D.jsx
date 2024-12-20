import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Decal, useTexture} from '@react-three/drei';
import { useGesture } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/three';
import PropTypes from 'prop-types';

const TechBox = ({ position, imgUrl }) => {
  const meshRef = useRef();
  const [decal] = useTexture([imgUrl]);
  
  const [spring, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { 
      mass: 1,
      tension: 80,
      friction: 20
    }
  }));
  
  const bind = useGesture({
    onDrag: ({ offset: [x], velocity: [vx], down }) => {
      if (meshRef.current) {
        const rotY = Math.max(
          Math.min(x / 50, Math.PI / 4),
          -Math.PI / 4
        );
        
        api.start({
          rotation: [0, rotY, 0],
          immediate: down
        });
        
        if (!down) {
          const momentumRotY = Math.max(
            Math.min(rotY + vx * 0.2, Math.PI / 4),
            -Math.PI / 4
          );
          
          api.start({
            rotation: [0, momentumRotY, 0]
          });
        }
      }
    }
  });

  return (
    <animated.group 
      ref={meshRef}
      position={position}
      {...bind()}
      rotation={spring.rotation}
      onPointerOver={(e) => {
        document.body.style.cursor = 'grab';
        e.stopPropagation();
      }}
      onPointerOut={(e) => {
        document.body.style.cursor = 'default';
        e.stopPropagation();
      }}
    >
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <mesh castShadow receiveShadow scale={1.5}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color='#ffffff'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
            metalness={0.1}
            roughness={0.2}
            emissive="#303030"
            emissiveIntensity={0.2}
            clearcoat={0.8}
            clearcoatRoughness={0.2}
            normalScale={0.4}
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1.2}
            map={decal}
            flatShading
          />
        </mesh>
      </Float>
    </animated.group>
  );
};

TechBox.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  imgUrl: PropTypes.string.isRequired
};

const TechStack3D = () => {
  const technologies = [
    { name: 'React', position: [-14, 0, 0], imgUrl: '/tech/Reactjs.png' },
    { name: 'HTML', position: [-10, 0, 0], imgUrl: '/tech/html.png' },
    { name: 'CSS', position: [-6, 0, 0], imgUrl: '/tech/css.png' },
    { name: 'Tailwind', position: [-2, 0, 0], imgUrl: '/tech/Tailwindcss.png' },
    { name: 'Docker', position: [2, 0, 0], imgUrl: '/tech/Docker.png' },
    { name: 'Node', position: [6, 0, 0], imgUrl: '/tech/nodejs.png' },
    { name: 'Express', position: [10, 0, 0], imgUrl: '/tech/express.png' },
    { name: 'Nest', position: [14, 0, 0], imgUrl: '/tech/nest.png' }
  ];

  return (
    <div className="tech-stack-3d">
      <Canvas
        camera={{ position: [0, 0, 25], fov: 18 }}
        style={{ height: '250px' }}
        shadows
      >
        <ambientLight intensity={0.7} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={0.5}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          {technologies.map((tech, index) => (
            <TechBox
              key={index}
              text={tech.name}
              position={tech.position}
              imgUrl={tech.imgUrl}
            />
          ))}
        </Suspense>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default TechStack3D; 