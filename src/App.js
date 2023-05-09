import Routes from "./routes";
import { createContext, useState } from "react";
import Popup from "./components/Popup";
import {
  StompSessionProvider
} from "react-stomp-hooks";
import { SOCKET_REGISTER_URL } from "./types";
import Notification from './components/Notification/Notification'

export const PopupContext = createContext();

const MAX_DEPTH_POPUP_STACK = 10;

function App() {
  const [isPopupOpenArray, setPopupOpenArray] = useState(
    new Array(MAX_DEPTH_POPUP_STACK).fill(false)
  );

  const [popupContentArray, setPopupContentArray] = useState(
    new Array(MAX_DEPTH_POPUP_STACK).fill(null)
  );

  const setPopupContentLevel = (level, content) => {
    //0 <= level < MAX_DEPTH
    const copiedPopupContentArray = [...popupContentArray];
    copiedPopupContentArray[level] = content;
    setPopupContentArray(copiedPopupContentArray);
  };

  const togglePopupContentLevel = (level) => {
    let copiedPopupOpenArray = [...isPopupOpenArray];
    console.log(copiedPopupOpenArray);
    console.log(isPopupOpenArray);
    copiedPopupOpenArray[level] = copiedPopupOpenArray[level] ? false : true;
    console.log(
      "%c set " + level + " to " + copiedPopupOpenArray[level],
      "color: red; font-size: 17px;"
    );
    setPopupOpenArray((value) => (value = copiedPopupOpenArray));
  };

  const hidePopupContentLevel = (level) => {
    let copiedPopupOpenArray = [...isPopupOpenArray];
    copiedPopupOpenArray[level] = false;
    setPopupOpenArray((value) => (value = copiedPopupOpenArray));
  };

  const GetPopupStackRender = () => {
    const ITERATOR_ARRAY = new Array(MAX_DEPTH_POPUP_STACK).fill(0);
    return (
      <>
        {ITERATOR_ARRAY.map((_, i) => {
          return (
            <>
              {isPopupOpenArray[i] ? (
                <Popup
                  togglePopup={() => {
                    togglePopupContentLevel(i);
                  }}
                >
                  {popupContentArray[i]}
                </Popup>
              ) : (
                <></>
              )}
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <PopupContext.Provider
        value={{
          setPopupContentLevel,
          togglePopupContentLevel,
          hidePopupContentLevel,
        }}
      >
        {<GetPopupStackRender />}
        <StompSessionProvider
          url={SOCKET_REGISTER_URL}
        >
          <Routes />
          <Notification/>
        </StompSessionProvider>
      </PopupContext.Provider>
    </>
  );
}

export default App;
