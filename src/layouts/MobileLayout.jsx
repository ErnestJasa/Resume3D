import { Canvas } from "@react-three/fiber";
import InternCard from "../models/experience/InternCard";
import { OrbitControls } from "@react-three/drei";
import OperatorCard from "../models/experience/OperatorCard";
import { Suspense, useRef } from "react";
import DevCard from "../models/experience/DevCard";
import HardwareCard from "../models/experience/HardwareCard";
import IntroductionText from "../models/text/IntroductionText";
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
import ContentQualityCard from "../models/experience/ContentQualityCard";

extend({ TextGeometry });

function MobileLayout({ windowWidth }) {
  let isMoving = false;
  const groupRef = useRef();
  const lastY = useRef(0);

  function handlePointerDown(e) {
    e.stopPropagation();
    // console.log(e.touches.length);
    if (e.touches.length === 1) {
      isMoving = true;
      lastY.current = e.touches[0].clientY;
    }
  }

  function handlePointerUp(e) {
    e.stopPropagation();
    isMoving = false;
  }
  const clampNumber = (num, a, b) =>
    Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
  function handlePointerMove(e) {
    if (!isMoving || e.touches.length !== 1) {
      return;
    }

    const deltaY = (e.touches[0].clientY - lastY.current) * -0.08;
    groupRef.current.position.y = clampNumber(
      groupRef.current.position.y + deltaY,
      -15,
      150
    );
    lastY.current = e.touches[0].clientY;
  }

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="w-full h-full ">
          <Suspense fallback={<Loader setIsLoading={() => null} />}>
            <Canvas
              onTouchStart={handlePointerDown}
              onTouchEnd={handlePointerUp}
              onTouchMove={handlePointerMove}
              shadows
              camera={{
                position: [0, 0, 25],
              }}
            >
              <directionalLight position={[1, 1, 1]} intensity={1.5} />
              <directionalLight
                position={[1, -1, -3]}
                intensity={5}
                color={"red"}
              />
              <ambientLight intensity={2} />
              <group position={[0, 0, 0]} ref={groupRef}>
                <IntroductionText
                  position={[-8.5, 3, 0]}
                  windowWidth={windowWidth}
                />
                <SectionTitle
                  textMobile={[
                    {
                      text: "Education & Work",
                      position: [-7.9, -8, 0],
                    },
                    {
                      text: "Experience",
                      position: [-4.3, -10, 0],
                    },
                  ]}
                />
                <SmallText position={[-3, -14, 0]} text={"Education"} />
                <group
                  position={[0.5, -29, 0]}
                  scale={3}
                  shadows
                  castShadow
                  receiveShadow
                >
                  <HardwareCard position={[0, 0, 0]} />
                  <DevCard position={[0, -4.8, 0]} />
                </group>
                <SmallText position={[-5.5, -47, 0]} text={"Work Experience"} />
                <group position={[0.5, -34, 0]} scale={3}>
                  <InternCard position={[0, -8, 0]} />
                  <OperatorCard position={[0, -12, 0]} />
                  <ContentQualityCard position={[0, -16.7, 0]} />
                </group>
                <SectionTitle
                  textMobile={[{ text: "Skills", position: [-2, -90, 0] }]}
                />

                <SmallText
                  position={[-5.5, -94, 0]}
                  text={"Technologies I'm"}
                />
                <SmallText position={[-3.8, -95.5, 0]} text={"familiar with"} />
                <group position={[0, -103, 0]}>
                  <JsLogo
                    scale={6}
                    position={[-3.5, 0, -0.6]}
                    windowWidth={windowWidth}
                  />
                  <HtmlLogo
                    scale={2.5}
                    position={[5, -0.2, -0.2]}
                    windowWidth={windowWidth}
                  />
                  <ReactLogo
                    scale={1.5}
                    position={[-3.3, -10.5, -0.5]}
                    windowWidth={windowWidth}
                  />
                  <CssLogo
                    scale={2.5}
                    position={[5, -10.5, -0.2]}
                    windowWidth={windowWidth}
                  />
                  <DotnetLogo
                    scale={6}
                    position={[-3.5, -20.5, -0.6]}
                    windowWidth={windowWidth}
                  />
                  <SqlLogo
                    scale={0.42}
                    position={[5.3, -21, -0.2]}
                    windowWidth={windowWidth}
                  />
                </group>
                <SectionTitle
                  textMobile={[
                    { text: "Contacts", position: [-2.4, -135.5, 0] },
                  ]}
                />
                <Contacts position={[-7, -140, 0]} windowWidth={windowWidth} />

                <OrbitControls
                  minPolarAngle={Math.PI / 2}
                  maxPolarAngle={Math.PI / 2}
                />
              </group>
            </Canvas>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default MobileLayout;
