import { useGLTF } from "@react-three/drei";
import internCardScene from "../../assets/3d/cards/Intern.glb";

function InternCard({ position, ...props }) {
  const { nodes, materials } = useGLTF(internCardScene);
  return (
    <group {...props} dispose={null} position={position}>
      <group
        position={[-1.81, 1.204, 0.215]}
        rotation={[1.568, 0, 0]}
        scale={0.242}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text003.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text003_1.geometry}
          material={materials.Base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text003_2.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text003_3.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text003_4.geometry}
          material={materials.Year}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text003_5.geometry}
          material={materials.Material}
        />
      </group>
    </group>
  );
}

export default InternCard;
