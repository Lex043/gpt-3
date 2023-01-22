import { Header, Footer } from "./layout";
import { Startups, Gpt } from "./components";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Startups />
      <Gpt />
      <Footer />
    </div>
  );
};

export default App;
