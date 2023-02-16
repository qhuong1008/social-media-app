import Popup from "reactjs-popup";
import Content from "../Content/Content";
import style from "./ModalExample.scss";

function ModalExample() {
  return (
    <>
      <h1>Create React Modal with 22 line of code </h1>
      <Popup modal trigger={<button>Click Me</button>}>
        {(close) => <Content close={close} />}
      </Popup>
    </>
  );
}

export default ModalExample;
