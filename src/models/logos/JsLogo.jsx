import { useState } from "react";
import { useGLTF } from "@react-three/drei";
import logoScene from "../../assets/3d/images/Js.glb";
import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import courier from "../../assets/fonts/Courier Prime_Regular.json";

extend({ TextGeometry });

function JsLogo({ scale, position, windowWidth, ...props }) {
  const font = new FontLoader().parse(courier);
  const baseFontScale = windowWidth > 768 ? 0.8 : 0.5;
  const baseTextPosition =
    windowWidth > 768 ? [-6, -8, 0.8] : [-3.7, -5.2, 0.4];
  const [logoScale, setLogoScale] = useState(scale);
  const [fontScale, setFontScale] = useState(baseFontScale);
  const [textPosition, setTextPosition] = useState(baseTextPosition);
  const text = "J A V A S C R I P T";
  function handleMouseEnter() {
    if (windowWidth > 768) {
      setLogoScale(scale + 0.5);
      setFontScale(fontScale + 0.1);
      setTextPosition([-6.8, -8, 0.8]);
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
          geometry={nodes.javascript.geometry}
          material={materials.javascript}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <mesh position={textPosition}>
        <textGeometry args={[text, { font, size: fontScale, height: 0.2 }]} />
        <meshPhysicalMaterial attach="material" color={"black"} />
      </mesh>
    </group>
  );
}

export default JsLogo;
