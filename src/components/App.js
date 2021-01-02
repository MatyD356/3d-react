import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics } from "use-cannon";

import Box from './Box.js'
import Model from './Rocket'

const App = () => {
  return (
    <Canvas>
      <Stars
        radius={300}
        fade />
      <Box value={[0, 0, -10]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
    </Canvas>
  );
}

export default App