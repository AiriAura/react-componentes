/**
 * Componente Sidebar
 * -----------------
 * Props:
 * - title: string -> Título de la barra lateral
 *
 * Contiene imagen y texto adicional.
 * La imagen se puede cambiar importando otra desde la carpeta assets.
 */
import miFoto from "../assets/mi-foto.jpg";

function Sidebar({ title }) {
  return (
    <div className="sidebar">
      <h2>{title}</h2>
      <img src={miFoto} alt="Huerta" />
      <p>Tips ecológicos y noticias verdes</p>
    </div>
  );
}

export default Sidebar;
