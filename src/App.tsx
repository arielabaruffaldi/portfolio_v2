import { Nav } from "@/components/templates/Nav/Nav";
import { Main } from "@/modules/Main/Main";
import { AppProvider } from "./providers/AppProvider/AppProvider";
import { About } from "./modules/About/About";
import { Projects } from "./modules/Projects/Projects";
import { Footer } from "./components/templates/Footer/Footer";

function App() {
  return (
    <AppProvider>
      <Nav />
      <Main />
     {/*  <Projects />
      <About /> */}
      <Footer />
    </AppProvider>
  );
}

export default App;
