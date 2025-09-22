/**
 * Componente RelatedPost
 * ---------------------
 * Props:
 * - text: string -> Texto del post relacionado
 *
 * Se utiliza para mostrar contenido adicional de manera llamativa
 * y con hover interactivo.
 */
function RelatedPost({ text }) {
  return (
    <div className="related-post">
      <p>{text}</p>
    </div>
  );
}

export default RelatedPost;
