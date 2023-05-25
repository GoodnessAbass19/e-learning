import { Outlet } from "react-router-dom";

// components
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;