/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: slvvrmnk (https://sketchfab.com/slvvrmnk)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/space-rocket-082859469c98437bbbcac6720b7a7303
title: space rocket
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./rocket/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh material={materials.palette} geometry={nodes.mesh_0.geometry} />
      </group>
    </group>
  )
}

useGLTF.preload('./rocket/scene.gltf')