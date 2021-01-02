import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from '@react-three/drei'
import { Physics } from "use-cannon";

import Box from './Box.js'

const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Box />
      </Physics>
    </Canvas>
  );
}

export default App