import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingIconProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
  size?: number;
}

const FloatingIcon = ({ position, rotation = [0, 0, 0], color, size = 1 }: FloatingIconProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[0, 0.5]}
    >
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.3} 
          roughness={0.4}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
};

export default FloatingIcon;