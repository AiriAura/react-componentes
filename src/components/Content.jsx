/**
 * Componente Content
 * -----------------
 * Contiene varios artículos.
 * Importa el componente Article y le pasa props de título y texto.
 */
import Article from "./Article";

function Content() {
  return (
    <div className="content">
      <Article title="Cómo plantar tomates" text="Guía paso a paso para sembrar tomates en tu huerta." />
      <Article title="Beneficios de la compostera" text="Aprende cómo reciclar residuos orgánicos y enriquecer tu tierra." />
    </div>
  );
}

export default Content;
