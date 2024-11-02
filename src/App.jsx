import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import { ImcProvider } from "./context/imc";

function App() {
  return (
    <div>
      <Header />
      <ImcProvider>
        <Input />
      </ImcProvider>
      <Footer />
    </div>
  );
}

export default App;
