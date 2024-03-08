'use client'

export default () => (
  <>
    <mesh position={[-2, 2, 0]} onClick={() => window.history.pushState(null, '', '/red')}>
      <boxGeometry />
      <meshLambertMaterial color="red" />
    </mesh>
    <mesh position={[0, 2, 0]} onClick={() => window.history.pushState(null, '', '/green')}>
      <boxGeometry />
      <meshLambertMaterial color="green" />
    </mesh>
    <mesh position={[2, 2, 0]} onClick={() => window.history.pushState(null, '', '/blue')}>
      <boxGeometry />
      <meshLambertMaterial color="blue" />
    </mesh>
  </>
)
