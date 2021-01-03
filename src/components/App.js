import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Stars, PerspectiveCamera } from '@react-three/drei'
import { } from "use-cannon";

import Box from './Box.js'
import Model from './Rocket'


const App = () => {
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        fov={40}
        position={[0, 20, 0]}
        rotation={[-0.25, 0, 0]}>
      </PerspectiveCamera>
      <Stars
        radius={300}
        fade />
      <Suspense fallback={null}>
        <Model positionArr={[0, 60, -20]} />
      </Suspense>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
    </Canvas>
  );
}

export default App