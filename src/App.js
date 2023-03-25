import Routes from "./routes";
import { createContext, useState } from "react";
import Popup from "./components/Popup";

export const PopupContext = createContext();

function App() {
    const [isPopupOpen, togglePopup] = useState(false);
    const [popupContent, setPopupcontent] = useState(null);

    return (
        <>
            <PopupContext.Provider value={{ togglePopup, setPopupcontent }}>
                {isPopupOpen && <Popup>{popupContent}</Popup>}
                <Routes />
            </PopupContext.Provider>
        </>
    );
}

export default App;
