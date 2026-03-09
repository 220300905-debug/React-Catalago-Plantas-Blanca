//Alumna:Blanca Montes de Oca
import "./styles.css";
import PlantaCard from "./PlantaCard";
export default function App() {
  const plantas = [
    { nombre: "Rosas", tipo: "Flor ornamental" },
    { nombre: "Flamboyan", tipo: "Árbol con flores" },
    { nombre: "Maxculix", tipo: "Flor tropical" },
    { nombre: "Vicarias", tipo: "Flor decorativa" },
    { nombre: "Lengua de suegra", tipo: "Planta ornamental" },
    { nombre: "Palo de brasil", tipo: "Planta ornamental" },
  ];

  return (
    <div>
      <h1>🌺 Catálogo de plantas de la región por la alumna Blanca </h1>

      {plantas.map((planta, index) => (
        <PlantaCard key={index} nombre={planta.nombre} tipo={planta.tipo} />
      ))}
    </div>
  );
}
