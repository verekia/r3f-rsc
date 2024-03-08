'use client'

import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'

export default function BlueCube(props) {
  const ref = useRef<Mesh>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01
      ref.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={ref} {...props}>
      <boxGeometry />
      <meshLambertMaterial color="blue" />
    </mesh>
  )
}
