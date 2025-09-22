import Header from "./components/Header";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import RelatedPost from "./components/RelatedPost";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Sidebar />
      <RelatedPost text="Post relacionado 1" />
      <RelatedPost text="Post relacionado 2" />
      <Footer />
    </div>
  );
}

export default App;
