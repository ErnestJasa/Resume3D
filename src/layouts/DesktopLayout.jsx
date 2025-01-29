import { Canvas } from "@react-three/fiber";
import InternCard from "../models/experience/InternCard";
import { OrbitControls } from "@react-three/drei";
import OperatorCard from "../models/experience/OperatorCard";
import { Suspense, useState } from "react";
import DevCard from "../models/experience/DevCard";
import HardwareCard from "../models/experience/HardwareCard";
import IntroductionText from "../models/text/IntroductionText";
import PenImage from "../models/PenImage";
import SectionTitle from "../models/text/SectionTitle";
import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import DotnetLogo from "../models/logos/DotnetLogo";
import SqlLogo from "../models/logos/SqlLogo";
import JsLogo from "../models/logos/JsLogo";
import HtmlLogo from "../models/logos/HtmlLogo";
import CssLogo from "../models/logos/CssLogo";
import ReactLogo from "../models/logos/ReactLogo";
import SmallText from "../models/text/SmallText";
import Loader from "../components/Loader";
import Contacts from "../models/text/Contacts";
import Controls from "../components/controls/Controls";
import { TOUCH } from "three";
import ContentQualityCard from "../models/experience/ContentQualityCard";

extend({ TextGeometry });

function DesktopLayout({ windowWidth }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <main className="flex justify-center items-center w-full h-screen">
        <div className="w-full h-full ">
          <Suspense fallback={<Loader setIsLoading={setIsLoading} />}>
            <Canvas
              shadows
              dpr={[1, 2]}
              camera={{
                position: [-26, 7, 30],
                fov: 75,
              }}
            >
              <directionalLight position={[1, 1, 1]} intensity={1.5} />
              <directionalLight
                position={[1, -1, -3]}
                intensity={5}
                color={"red"}
              />
              <ambientLight intensity={2} />
              <IntroductionText
                windowWidth={windowWidth}
                position={[-25, 8, 0]}
              />
              <PenImage scale={32} position={[17, -14, 0]} />
              <SectionTitle
                windowWidth={windowWidth}
                text="Education & Work Experience"
                position={[-15, -15, 0]}
              />
              <SmallText
                windowWidth={windowWidth}
                position={[-3, -18, 0]}
                text={"Education"}
              />
              <group
                position={[0, -32, 0]}
                scale={3}
                shadows
                castShadow
                receiveShadow
              >
                <HardwareCard position={[-2, 0, 0]} />
                <DevCard position={[2, -4.8, 0]} />
              </group>
              <SmallText
                windowWidth={windowWidth}
                position={[-3.5, -50, 0]}
                text={"Work Experience"}
              />
              <group position={[0, -37, 0]} scale={3}>
                <InternCard position={[-2, -8, 0]} />
                <OperatorCard position={[2, -12, 0]} />
                <ContentQualityCard position={[-2, -16.7, 0]} />
              </group>
              <SectionTitle
                windowWidth={windowWidth}
                text="Skills"
                position={[-1, -92, 0]}
              />

              <SmallText
                windowWidth={windowWidth}
                position={[-11, -95, 0]}
                text={"Technologies I'm familiar with"}
              />
              <group position={[-12.8, -105, 0]}>
                <JsLogo
                  windowWidth={windowWidth}
                  scale={10}
                  position={[-5, 0, -1]}
                />
                <HtmlLogo
                  windowWidth={windowWidth}
                  scale={4}
                  position={[15, -0.2, -0.2]}
                />
                <ReactLogo
                  windowWidth={windowWidth}
                  scale={2.5}
                  position={[35, 0, -1]}
                />
                <SqlLogo
                  windowWidth={windowWidth}
                  scale={0.8}
                  position={[-5, -20, -0.3]}
                />
                <CssLogo
                  windowWidth={windowWidth}
                  scale={4}
                  position={[15, -20.2, -0.2]}
                />
                <DotnetLogo
                  windowWidth={windowWidth}
                  scale={10}
                  position={[35, -20, -1]}
                />
              </group>
              <SectionTitle
                windowWidth={windowWidth}
                text="Contacts"
                position={[-2.4, -140, 0]}
              />
              <Contacts windowWidth={windowWidth} position={[-7, -145, 0]} />
              <OrbitControls touches={{ ONE: TOUCH.PAN }} />
            </Canvas>
          </Suspense>
        </div>
      </main>
      {isLoading ? "" : <Controls />}
    </>
  );
}

export default DesktopLayout;
