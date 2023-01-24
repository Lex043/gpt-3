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
      <Header />
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
