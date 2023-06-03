import ReactDOM from "react-dom";
import { useNavDataContext } from "../../App";
import "./Overlay.css";

const Overlay = () => {
  const navData = useNavDataContext();

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={`global-overlay ${navData.isNavListActive && "active"}`}
          onClick={() => {
            navData.setIsNavListActive((prevValue) => !prevValue);
          }}
        ></div>,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Overlay;
