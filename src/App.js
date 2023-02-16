import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalExample from "./components/ModalExample/ModalExample";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ModalExample />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
