/**
 * Componente principal App
 * -----------------------
 * Este es el componente raíz de la aplicación.
 * Contiene la estructura general de la página:
 * Header, Sidebar, Content, RelatedPost y Footer.
 */
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import RelatedPost from "./components/RelatedPost";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Sidebar title="Tips y Noticias" />
      <Content />
      <RelatedPost text="Post relacionado: Cómo cuidar plantas aromáticas" />
      <RelatedPost text="Post relacionado: Compostaje fácil en casa" />
      <Footer />
    </div>
  );
}

export default App;
