import logo from "./logo.svg";
import "./App.css";
import MainRoutes from "./Routes/Routes";
import ContextProvider from "./Context/Context";

function App() {
  return (
    <div>
      <ContextProvider>
        <MainRoutes />
      </ContextProvider>
    </div>
  );
}

export default App;
