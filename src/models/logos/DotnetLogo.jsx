import { useState } from "react";
import { useGLTF } from "@react-three/drei";
import logoScene from "../../assets/3d/images/Dotnet.glb";
import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import courier from "../../assets/fonts/Courier Prime_Regular.json";

extend({ TextGeometry });

function DotnetLogo({ scale, position, windowWidth, ...props }) {
  const font = new FontLoader().parse(courier);
  const baseFontScale = windowWidth > 768 ? 0.8 : 0.5;
  const baseTextPosition =
    windowWidth > 768 ? [-2.3, -8.1, 0.8] : [-1.3, -5.2, 0.4];
  const [logoScale, setLogoScale] = useState(scale);
  const [fontScale, setFontScale] = useState(baseFontScale);
  const [textPosition, setTextPosition] = useState(baseTextPosition);
  const fontSize = 0.8;
  const text = ".N E T";
  function handleMouseEnter() {
    if (windowWidth > 768) {
      setLogoScale(scale + 0.5);
      setFontScale(fontScale + 0.1);
      setTextPosition([-2.6, -8.1, 0.8]);
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
          geometry={nodes.dotnet.geometry}
          material={materials.dotnet}
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

export default DotnetLogo;
