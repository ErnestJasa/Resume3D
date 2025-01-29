import { useGLTF } from "@react-three/drei";
import hardwareCardScene from "../../assets/3d/cards/Hardware.glb";

function HardwareCard({ position, ...props }) {
  const { nodes, materials } = useGLTF(hardwareCardScene);
  return (
    <group {...props} dispose={null} position={position}>
      <group
        position={[0.041, 2.01, 0.234]}
        rotation={[1.573, 0, 0]}
        scale={0.202}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002_1.geometry}
          material={materials.Base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002_2.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002_3.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002_4.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002_5.geometry}
          material={materials.Year}
        />
      </group>
    </group>
  );
}
export default HardwareCard;
