import { useState } from "react";
import { useGLTF } from "@react-three/drei";
import logoScene from "../../assets/3d/images/Css.glb";
import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import courier from "../../assets/fonts/Courier Prime_Regular.json";

extend({ TextGeometry });

function CssLogo({ scale, position, windowWidth, ...props }) {
  const font = new FontLoader().parse(courier);
  const baseFontScale = windowWidth > 768 ? 0.8 : 0.5;
  const baseTextPosition = windowWidth > 768 ? [-1.7, -8.1, 0] : [-1, -5.1, 0];
  const [logoScale, setLogoScale] = useState(scale);
  const [fontScale, setFontScale] = useState(baseFontScale);
  const [fontPosition, setFontPosition] = useState(baseTextPosition);
  const fontSize = 0.8;
  const text = "C S S";
  function handleMouseEnter() {
    if (windowWidth > 768) {
      setLogoScale(scale + 0.5);
      setFontScale(fontScale + 0.1);
      setFontPosition([-1.9, -8.1, 0]);
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Material}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.325}
        />
      </group>
      <mesh position={fontPosition}>
        <textGeometry args={[text, { font, size: fontScale, height: 0.2 }]} />
        <meshPhysicalMaterial attach="material" color={"black"} />
      </mesh>
    </group>
  );
}

export default CssLogo;
