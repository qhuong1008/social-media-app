import React from "react";
import $ from "./index.module.scss";

function Popup({ children, togglePopup }) {
  return (
    <>
      <div className={$["popup_backdrop"]} onClick={togglePopup} />
      <div className={$["popup_wrapper"]}>{children}</div>
    </>
  );
}

export default Popup;
