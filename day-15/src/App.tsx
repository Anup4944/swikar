import "./App.css";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <ModeToggle />

        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Taxing Laughter: The Joke Tax Chronicles
        </h1>

        <h1 className="text-3xl font-bold ">
          Hello world!{" "}
          <Button variant={"destructive"} size={"lg"}>
            {" "}
            Submit{" "}
          </Button>
          {/* <div className="bg-secondary-foreground text-primary-foreground">
            Hello
          </div> */}
        </h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
