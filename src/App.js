import "./App.css";
import IntroCard from "./components/IntroCard";
import Links from "./components/Links";
import Layout from "./components/ui-layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <IntroCard />
        <Links />
      </Layout>
    </div>
  );
}

export default App;
