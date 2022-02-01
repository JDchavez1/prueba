import "./Liverpool.css";
function Liverpool(props) {
  return (
    <div
      className="container"
      style={{ borderStyle: "solid", borderColor: "black", marginTop: "30px" }}
    >
      <h1 style={{ backgroundColor: "yellow" }}>{props.nombre}</h1>
      <p>{props.detalle}</p>
      <img className="foto" src={props.foto} />
    </div>
  );
}

export default Liverpool;
