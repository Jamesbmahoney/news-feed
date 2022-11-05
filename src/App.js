import "./App.css";
import NewsList from "./components/NewsList";
import { NewsContextProvider } from "./NewsContext";

function App() {
  return (
    <NewsContextProvider>
      <NewsList />
    </NewsContextProvider>
  );
}

export default App;
