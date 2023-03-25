import React from "react";
import $ from "./index.module.scss";

function Popup({ children }) {
    return (
        <div className={$["popup_backdrop"]}>
            <div className={$["popup_wrapper"]}>{children}</div>
        </div>
    );
}

export default Popup;
