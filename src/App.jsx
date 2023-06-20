// import Canvas from "./canvas";
import CanvasModal from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="app transition-all ease-in">
      {/* <Canvas /> */}
      <Home />
      <CanvasModal />
      <Customizer />
    </main>
  );
};

export default App;
