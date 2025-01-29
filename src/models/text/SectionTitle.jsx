import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import courier from "../../assets/fonts/Courier Prime_Regular.json";

extend({ TextGeometry });

function SectionTitle({ position, text, textMobile, windowWidth }) {
  function SectionTitleDesktop({ position, text }) {
    const font = new FontLoader().parse(courier);
    const fontSize = 1.4;

    return (
      <mesh position={position}>
        <textGeometry args={[text, { font, size: fontSize, height: 0.2 }]} />
        <meshPhysicalMaterial attach="material" color={"black"} />
      </mesh>
    );
  }
  function SectionTitleMobile({ position, textMobile = [] }) {
    const font = new FontLoader().parse(courier);
    const fontSize = 1.2;
    return (
      <>
        {textMobile.map((info, id) => (
          <mesh key={id} position={info.position}>
            <textGeometry
              args={[info.text, { font, size: fontSize, height: 0.2 }]}
            />
            <meshPhysicalMaterial attach="material" color={"black"} />
          </mesh>
        ))}
      </>
    );
  }

  return windowWidth > 768
    ? SectionTitleDesktop({ position, text })
    : SectionTitleMobile({ position, textMobile });
}
export default SectionTitle;
