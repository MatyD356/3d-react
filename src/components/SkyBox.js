import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Stars } from '@react-three/drei'

const SkyBox = () => {
  const mesh = useRef(null);
  useFrame(() => {
  })
  return (
    <Stars
      ref={mesh}
      radius={100} />
  )
}
export default SkyBox