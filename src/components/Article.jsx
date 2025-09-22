/**
 * Componente Article
 * -----------------
 * Props:
 * - title: string -> Título del artículo
 * - text: string -> Contenido del artículo
 *
 * Este componente se utiliza dentro de Content para mostrar artículos
 * de manera uniforme.
 */
function Article({ title, text }) {
  return (
    <div className="article special-article">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Article;
