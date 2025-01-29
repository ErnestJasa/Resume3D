import { useGLTF } from "@react-three/drei";
import penImageScene from "../assets/3d/images/Pen.glb";

function PenImage({ scale, position, ...props }) {
  const { nodes, materials } = useGLTF(penImageScene);
  return (
    <group {...props} dispose={null} scale={scale} position={position}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Web-Design-Transparent-Images-PNG"].geometry}
        material={materials["Web-Design-Transparent-Images-PNG"]}
        position={[0, 0.502, 0]}
        rotation={[1.581, -0.011, 0.012]}
      />
    </group>
  );
}

export default PenImage;
