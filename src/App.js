import logo from "./logo.svg";
import "./App.css";
import MainRoutes from "./Routes/Routes";
import ContextProvider from "./Context/Context";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <div>
      <ContextProvider>
        <CookiesProvider>
        <MainRoutes />
        </CookiesProvider>
      </ContextProvider>
    </div>
  );
}

export default App;
