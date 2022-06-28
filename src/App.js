import "./App.css";
import MainRoutes from "./Routes/Routes";
import AuthProvider from "./Context/Context";
import Modal from "react-modal";
import EventProvider from "./Context/EventContext";


function App() {
  Modal.setAppElement('body');

  return (
    <div>
      <AuthProvider>
        <EventProvider>
          <MainRoutes />
          </EventProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
