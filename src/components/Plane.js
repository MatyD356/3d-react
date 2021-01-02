import React from 'react'
import { usePlane } from 'use-cannon'

const Plane = (props) => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}
export default Plane