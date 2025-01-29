import { useState } from "react";
import { useGLTF } from "@react-three/drei";
import logoScene from "../../assets/3d/images/React.glb";
import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import courier from "../../assets/fonts/Courier Prime_Regular.json";

extend({ TextGeometry });

function ReactLogo({ scale, position, windowWidth, ...props }) {
  const font = new FontLoader().parse(courier);
  const baseFontScale = windowWidth > 768 ? 0.8 : 0.5;
  const baseTextPosition =
    windowWidth > 768 ? [-2.6, -7.7, 0.8] : [-1.8, -5, 0.4];
  const [logoScale, setLogoScale] = useState(scale);
  const [fontScale, setFontScale] = useState(baseFontScale);
  const [textPosition, setTextPosition] = useState(baseTextPosition);
  const fontSize = 0.8;
  const text = "R E A C T";
  function handleMouseEnter() {
    if (windowWidth > 768) {
      setLogoScale(scale + 0.5);
      setFontScale(fontScale + 0.1);
      setTextPosition([-2.9, -7.7, 0.8]);
    }
  }
  function handleMouseLeave() {
    setLogoScale(scale);
    setFontScale(baseFontScale);
    setTextPosition(baseTextPosition);
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["React-Logo"].geometry}
          material={materials["Material.002"]}
          position={[0, 0.079, 0.181]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[0.392, 0.527, 0.392]}
        />
      </group>
      <mesh position={textPosition}>
        <textGeometry args={[text, { font, size: fontScale, height: 0.2 }]} />
        <meshPhysicalMaterial attach="material" color={"black"} />
      </mesh>
    </group>
  );
}

export default ReactLogo;
