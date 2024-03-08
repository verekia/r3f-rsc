import BlueCube from './components/BlueCube'
import ClientCanvas from './components/ClientCanvas'
import DreiCameraOrbit from './components/DreiCameraOrbit'

const Cubes = () => (
  <>
    <BlueCube position={[-1.2, 0, 0]} />
    <BlueCube position={[1.2, 0, 0]} />
  </>
)

export default () => (
  <ClientCanvas>
    <ambientLight />
    <Cubes />
    <DreiCameraOrbit />
  </ClientCanvas>
)
