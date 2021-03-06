import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { PointerLockControls } from '@react-three/drei'
import { Physics } from "use-cannon";

import Model from './Rocket'
import Camera from './Camera'
import SkyBox from './SkyBox'


const App = () => {

  return (
    <Canvas >
      <PointerLockControls />
      <Camera />
      <SkyBox />
      <Suspense fallback={null}>
        <Physics>
          <Model positionArr={[0, 60, -20]} />
        </Physics>
      </Suspense>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
    </Canvas>
  );
}

export default App