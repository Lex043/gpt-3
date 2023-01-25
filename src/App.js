import { Header, Footer } from "./layout";
import {
  Startups,
  Gpt,
  TheFuture,
  GetStarted,
  RegisterToday,
  Alot,
  Blog,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient">
        <Header />
      </div>
      <Startups />
      <Gpt />
      <TheFuture />
      <GetStarted />
      <RegisterToday />
      <Alot />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
