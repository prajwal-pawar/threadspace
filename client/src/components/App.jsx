import Header from "./Header";
import { demo_banner } from "../assets/images/images";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />

      <div>
        <img src={demo_banner} alt="banner" className="h-20 w-full bg-cover" />
      </div>

      <div></div>
    </div>
  );
}

export default App;
