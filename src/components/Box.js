import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'

const Box = ({ value }) => {
  const mesh = useRef(null);
  useFrame(() => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.01
  })

  return (
    <mesh ref={mesh} position={[...value]} rotation={new THREE.Euler(0, 0, 0)} scale={1}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}
export default Box