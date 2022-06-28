import "./App.css";
import MainRoutes from "./Routes/Routes";
import ContextProvider from "./Context/Context";
import Modal from "react-modal";


function App() {
  Modal.setAppElement('body');

  return (
    <div>
      <ContextProvider>
          <MainRoutes />
      </ContextProvider>
    </div>
  );
}

export default App;
