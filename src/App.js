//React + Components
import { Container } from "./components/container";

//Style
import "./App.scss";

//Packages
import { QueryClient, QueryClientProvider } from "react-query";

//Initialization
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Container />
      </div>
    </QueryClientProvider>
  );
}

export default App;
