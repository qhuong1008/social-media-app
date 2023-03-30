import Routes from "./routes";
import { createContext, useState } from "react";
import Popup from "./components/Popup";

export const PopupContext = createContext();

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupcontent] = useState(null);
  const togglePopup = () => setPopupOpen((prev) => !prev);

  return (
    <>
      <PopupContext.Provider value={{ togglePopup, setPopupcontent }}>
        {isPopupOpen && <Popup togglePopup={togglePopup}>{popupContent}</Popup>}
        <Routes />
      </PopupContext.Provider>
    </>
  );
}

export default App;
