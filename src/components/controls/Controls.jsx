// import mouseRightButton from "../assets/svg/mouseRightButton.svg";
import "./Controls.css";
import rightClickImage from "../../assets/images/right-click.png";
import leftClickImage from "../../assets/images/left-click.png";
import scrollImage from "../../assets/images/scroll.png";
function Controls() {
  return (
    <>
      <div className="cursor-default hidden xl:flex flex-col-reverse fixed right-0 top-10 backdrop-blur-xl rounded-l-lg  controls duration-150 bg-white/30 vertical-text font-mono controls ">
        <h3 className="font-semibold text-lg uppercase controls-header pt-3 pb-3 text-center ">
          Controls
        </h3>
        <div className="horizontal-text p-5 gap-4 controls-info border-l-2 border-black flex h-80">
          <div className="flex justify-center text-center flex-col ">
            <div title="Pan">
              <img src={rightClickImage} alt="Right click image" width="60px" />
              <h4 className="text-lg">Pan</h4>
            </div>
            <div title="Rotate">
              <img src={leftClickImage} alt="Left click image" width="60px" />
              <h4 className="text-lg">Rotate</h4>
            </div>

            <div title="Zoom">
              <img src={scrollImage} alt="Mouse wheel image" width="60px" />
              <h4 className="text-lg">Zoom</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Controls;
