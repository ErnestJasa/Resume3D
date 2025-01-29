import { useState } from "react";
import { useGLTF } from "@react-three/drei";
import logoScene from "../../assets/3d/images/Sql.glb";
import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import courier from "../../assets/fonts/Courier Prime_Regular.json";

extend({ TextGeometry });

function SqlLogo({ scale, position, windowWidth, ...props }) {
  const font = new FontLoader().parse(courier);
  const baseFontScale = windowWidth > 768 ? 0.8 : 0.5;
  const baseTextPosition =
    windowWidth > 768 ? [-2.8, -7.95, 0.1] : [-2, -4.85, 0];
  const [logoScale, setLogoScale] = useState(scale);
  const [fontScale, setFontScale] = useState(baseFontScale);
  const [textPosition, setFontPosition] = useState(baseTextPosition);
  const fontSize = 0.8;
  const text = "M S  S Q L";
  function handleMouseEnter() {
    if (windowWidth > 768) {
      setLogoScale(scale + 0.13);
      setFontScale(fontScale + 0.1);
      setFontPosition([-3, -7.95, 0.1]);
    }
  }
  function handleMouseLeave() {
    setLogoScale(scale);
    setFontScale(baseFontScale);
    setFontPosition(baseTextPosition);
  }
  const { nodes, materials } = useGLTF(logoScene);
  return (
    <group
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
      {...props}
      dispose={null}
      position={position}
    >
      <group scale={logoScale}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={[12.5, 1, 12.5]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004_1.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004_2.geometry}
            material={materials["Material.007"]}
          />
        </group>
      </group>
      <mesh position={textPosition}>
        <textGeometry args={[text, { font, size: fontScale, height: 0.2 }]} />
        <meshPhysicalMaterial attach="material" color={"black"} />
      </mesh>
    </group>
  );
}

export default SqlLogo;
