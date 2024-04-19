import Navigation from "./wrappers/Navigation";
import "./App.css";
import { UserContextProvider } from "./contexts/UserContext";
import Listeners from "./wrappers/Listeners";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Listeners />
        <Navigation />
      </UserContextProvider>
    </QueryClientProvider>
  );
};

export default App;
