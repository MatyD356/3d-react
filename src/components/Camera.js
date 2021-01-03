import React, { useRef } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'

const Camera = () => {
  const mesh = useRef(null);
  useFrame(() => {
    mesh.current.position.z -= 1
  })
  return (
    <PerspectiveCamera
      makeDefault
      fov={40}
      ref={mesh}
      position={[0, 20, 0]}
      rotation={[-0.25, 0, 0]}>
    </PerspectiveCamera>

  )
}
export default Camera