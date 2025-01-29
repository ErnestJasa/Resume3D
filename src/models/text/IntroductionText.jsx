import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import courier from "../../assets/fonts/Courier Prime_Regular.json";
import NameText from "./NameText";
import TitleText from "./TitleText";

extend({ TextGeometry });

function IntroductionText({ position, windowWidth }) {
  function IntroductionTextDesktop({ position }) {
    const font = new FontLoader().parse(courier);
    const fontSize = 0.7;
    const textLineOne = "Finished studying .Net at Akademija.it ";
    const textLineTwo = "and looking for junior/intern opportunities.";
    const textLineThree = "I'm communicative, hard working and";
    const textLineFour = "always striving to improve myself.";

    return (
      <group position={position}>
        <TitleText position={[0, 6, 0]} />
        <NameText position={[0, 4, 0]} />
        <mesh>
          <textGeometry
            args={[textLineOne, { font, size: fontSize, height: 0.2 }]}
          />
          <meshPhysicalMaterial attach="material" color={"black"} />
        </mesh>
        <mesh position={[0, -1, 0]}>
          <textGeometry
            args={[textLineTwo, { font, size: fontSize, height: 0.2 }]}
          />
          <meshPhysicalMaterial attach="material" color={"black"} />
        </mesh>
        <mesh position={[0, -2, 0]}>
          <textGeometry
            args={[textLineThree, { font, size: fontSize, height: 0.2 }]}
          />
          <meshPhysicalMaterial attach="material" color={"black"} />
        </mesh>
        <mesh position={[0, -3, 0]}>
          <textGeometry
            args={[textLineFour, { font, size: fontSize, height: 0.2 }]}
          />
          <meshPhysicalMaterial attach="material" color={"black"} />
        </mesh>
      </group>
    );
  }
  function IntroductionTextMobile({ position }) {
    const font = new FontLoader().parse(courier);
    const fontSize = 0.7;
    const textLineOne = "Finished studying .Net at";
    const textLineTwo = "Akademija.it and looking for";
    const textLineThree = "junior/intern opportunities.";
    const textLineFour = "I'm communicative, hard";
    const textLineFive = "working and always striving";
    const textLineSix = "to improve myself.";
    return (
      <group position={position}>
        <TitleText position={[0, 6, 0]} />
        <NameText position={[0, 4, 0]} />
        <mesh>
          <textGeometry
            args={[textLineOne, { font, size: fontSize, height: 0.2 }]}
          />
          <meshPhysicalMaterial attach="material" color={"black"} />
        </mesh>
        <mesh position={[0, -1, 0]}>
          <textGeometry
            args={[textLineTwo, { font, size: fontSize, height: 0.2 }]}
          />
          <meshPhysicalMaterial attach="material" color={"black"} />
        </mesh>
        <mesh position={[0, -2, 0]}>
          <textGeometry
            args={[textLineThree, { font, size: fontSize, height: 0.2 }]}
          />
          <meshPhysicalMaterial attach="material" color={"black"} />
        </mesh>
        <mesh position={[0, -3, 0]}>
          <textGeometry
            args={[textLineFour, { font, size: fontSize, height: 0.2 }]}
          />
          <meshPhysicalMaterial attach="material" color={"black"} />
        </mesh>
        <mesh position={[0, -4, 0]}>
          <textGeometry
            args={[textLineFive, { font, size: fontSize, height: 0.2 }]}
          />
          <meshPhysicalMaterial attach="material" color={"black"} />
        </mesh>
        <mesh position={[0, -5, 0]}>
          <textGeometry
            args={[textLineSix, { font, size: fontSize, height: 0.2 }]}
          />
          <meshPhysicalMaterial attach="material" color={"black"} />
        </mesh>
      </group>
    );
  }
  return windowWidth > 768
    ? IntroductionTextDesktop({ position })
    : IntroductionTextMobile({ position });
}
export default IntroductionText;
