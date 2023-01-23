import { Header, Footer } from "./layout";
import {
  Startups,
  Gpt,
  TheFuture,
  GetStarted,
  RegisterToday,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Startups />
      <Gpt />
      <TheFuture />
      <GetStarted />
      <RegisterToday />
      <Footer />
    </div>
  );
};

export default App;
