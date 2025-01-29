import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import courier from "../../assets/fonts/Courier Prime_Regular.json";

extend({ TextGeometry });

function Contacts({ position, windowWidth }) {
  const font = new FontLoader().parse(courier);
  const infoPosition = windowWidth > 768 ? [10, 0, 0] : [0, -1, 0];
  const fontSize = windowWidth > 768 ? 0.7 : 0.6;
  const email = "ernestjasaitis@gmail.com";
  const name = "Ernestas Jasaitis";
  function handleMouseEnter(event) {
    document.querySelector("body").style.cursor = "pointer";
  }
  function handleMouseLeave(event) {
    document.querySelector("body").style.cursor = "default";
  }
  function handleEmailEvent() {
    window.location.href = `mailto:${email}`;
  }
  function handleLinkedInEvent() {
    window.open("https://www.linkedin.com/in/ernestas-jasaitis/");
  }
  return (
    <group position={position}>
      <mesh position={[0, 0, 0]}>
        <textGeometry
          args={["Email:", { font, size: fontSize, height: 0.2 }]}
        />
        <meshPhysicalMaterial attach="material" color={"black"} />
      </mesh>
      <mesh position={[0, -2.5, 0]}>
        <textGeometry
          args={["LinkedIn:", { font, size: fontSize, height: 0.2 }]}
        />
        <meshPhysicalMaterial attach="material" color={"black"} />
      </mesh>
      <group position={infoPosition}>
        <group
          position={[0, 0, 0]}
          onClick={handleEmailEvent}
          onPointerEnter={handleMouseEnter}
          onPointerLeave={handleMouseLeave}
        >
          <mesh>
            <textGeometry
              args={[email, { font, size: fontSize, height: 0.2 }]}
            />
            <meshPhysicalMaterial attach="material" color={"black"} />
          </mesh>
          <mesh>
            <textGeometry
              args={[
                "________________________",
                { font, size: fontSize, height: 0.2 },
              ]}
            />
            <meshPhysicalMaterial attach="material" color={"black"} />
          </mesh>
        </group>
        <group
          position={[0, -2.5, 0]}
          onClick={handleLinkedInEvent}
          onPointerEnter={handleMouseEnter}
          onPointerLeave={handleMouseLeave}
        >
          <mesh>
            <textGeometry
              args={[name, { font, size: fontSize, height: 0.2 }]}
            />
            <meshPhysicalMaterial attach="material" color={"black"} />
          </mesh>
          <mesh>
            <textGeometry
              args={[
                "_________________",
                { font, size: fontSize, height: 0.2 },
              ]}
            />
            <meshPhysicalMaterial attach="material" color={"black"} />
          </mesh>
        </group>
      </group>
    </group>
  );
}
export default Contacts;
