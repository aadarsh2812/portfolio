import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingIcon from './FloatingIcon';

const TechIcons = () => {
  const icons = [
    { position: [-2, 0, 0] as [number, number, number], color: '#61dafb', size: 0.8 },
    { position: [0, 0, 0] as [number, number, number], color: '#f7df1e', size: 1 },
    { position: [2, 0, 0] as [number, number, number], color: '#68a063', size: 0.8 },
    { position: [0, 1.5, 0] as [number, number, number], color: '#3178c6', size: 0.9 },
  ];

  return (
    <div className="w-full h-96 relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          {icons.map((icon, index) => (
            <FloatingIcon
              key={index}
              position={icon.position}
              color={icon.color}
              size={icon.size}
            />
          ))}
          
          <OrbitControls 
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TechIcons;