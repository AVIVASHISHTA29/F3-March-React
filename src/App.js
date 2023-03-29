import "./App.css";

import { example2 } from "./example";
import Header from "./components/Header";
import MyComponent from "./components/MyComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MyComponent />
      <Footer />
    </div>
  );
}

export default App;

// Problem ? -> If I have 20 components -> 20 component.js files and 20 styless.css

example2();
