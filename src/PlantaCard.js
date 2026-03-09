export default function PlantaCard(props) {
  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "10px" }}>
      <h3>{props.nombre}</h3>
      <p>{props.tipo}</p>
    </div>
  );
}
