import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, useTexture, Decal } from '@react-three/drei';
import { useGesture } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/three';
import PropTypes from 'prop-types';
import { extend } from '@react-three/fiber';

extend({ Decal });

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
    onDrag: ({ offset: [x, y], velocity: [vx, vy], down }) => {
      if (meshRef.current) {
        const rotX = (y / 100) % (2 * Math.PI);
        const rotY = (x / 100) % (2 * Math.PI);
        
        api.start({
          rotation: [rotX, rotY, 0],
          immediate: down
        });
        
        if (!down) {
          const momentumX = rotX + vy * 0.2;
          const momentumY = rotY + vx * 0.2;
          
          api.start({
            rotation: [momentumX, momentumY, 0],
            config: {
              tension: 120,
              friction: 14
            }
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
      <Float speed={1.75} rotationIntensity={0.5} floatIntensity={1}>
        <mesh shadows scale={1.8}>
          <icosahedronGeometry args={[1, 1]} />
          <meshPhysicalMaterial
            color='#ffffff'
            envMapIntensity={2}
            metalness={2}
            roughness={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.2}
            thickness={2}
            reflectivity={6}
            iridescence={0.3}
            iridescenceIOR={1.5}
            sheen={1}
            sheenRoughness={0.5}
            sheenColor="#ffffff"
            attenuationColor="#ffffff"
            specularIntensity={1}
            specularColor="#ffffff"
          />
          <Decal 
            position={[0, 0, 1]}
            rotation={[0, 0, 0]}
            scale={1.5}
            map={decal}
            transparent
            polygonOffset
            polygonOffsetFactor={-10}
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
        <color attach="background" args={['#151515']} />
        <ambientLight intensity={0.3} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ff4444" />
        <pointLight position={[10, -10, 10]} intensity={1} color="#4477ff" />
        
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