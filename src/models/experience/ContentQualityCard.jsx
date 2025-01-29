import { useGLTF } from "@react-three/drei";
import contentQualityScene from "../../assets/3d/cards/ContentQuality.glb";

function ContentQualityCard({ position, ...props }) {
  const { nodes, materials } = useGLTF(contentQualityScene);
  return (
    <group {...props} dispose={null} position={position}>
      <group
        position={[-1.81, 1.961, 0.215]}
        rotation={[Math.PI / 2, 0, 0]}
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
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text003_3.geometry}
          material={materials.Year}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text003_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text003_5.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
}

export default ContentQualityCard;
