'use client'

import { useRouter } from 'next/navigation'

export default () => {
  const { push } = useRouter()

  return (
    <>
      <mesh position={[-2, 2, 0]} onClick={() => push('/r3f/red')}>
        <boxGeometry />
        <meshLambertMaterial color="red" />
      </mesh>
      <mesh position={[0, 2, 0]} onClick={() => push('/r3f/green')}>
        <boxGeometry />
        <meshLambertMaterial color="green" />
      </mesh>
      <mesh position={[2, 2, 0]} onClick={() => push('/r3f/blue')}>
        <boxGeometry />
        <meshLambertMaterial color="blue" />
      </mesh>
    </>
  )
}
