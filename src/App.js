import "./App.css";
import IntroCard from "./components/IntroCard";
import Links from "./components/Links";
import Layout from "./components/ui-layout/Layout";
import Footer from "./components/ui-layout/Footer";
function App() {
  return (
    <div className="App">
      <Layout>
        <IntroCard />
        <Links />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
