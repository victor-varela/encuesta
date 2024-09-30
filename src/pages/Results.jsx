import { useState } from "react";
import ShowResults from "./ShowResults";

const Results = ({ answers }) => {
  const [highestPoints, setHighestPoints] = useState(-1);

  const partyPoints = {
    nacional: { candidate: "Alvaro Delgado", points: 0 },
    frenteAmplio: { candidate: "Yamandu Orsi", points: 0 },
    cabildoAbierto: { candidate: "Guido Manini Rios", points: 0 },
    independiente: { candidate: "Pablo Mieres", points: 0 },
    colorado: { candidate: "Andres Ojeda", points: 0 },
  };

  const { cabildoAbierto, frenteAmplio, nacional, independiente, colorado } =
    partyPoints;

  answers.forEach((answer) => {
    switch (answer) {
      // Question 1
      case "Muy Importante":
        cabildoAbierto.points += 3;
        break;
      case "Importante":
        frenteAmplio.points += 3;
        break;
      case "Poco Importante":
        nacional.points += 3;
        independiente.points += 3;
        colorado.points += 3;
        break;

      //Question 2
      case "Mejorar el equilibrio fiscal y la regulación financiera":
        cabildoAbierto.points += 3;

        break;
      case "Fomentar la innovación y el apoyo a sectores estratégicos":
        frenteAmplio.points += 3;
        independiente.points += 3;
        break;
      case "Reducir costos y simplificar regulaciones":
        nacional.points += 3;
        colorado.points += 3;
        break;

      //Question 3
      case "Revisar el IRPF y el régimen fiscal para pymes":
        cabildoAbierto.points += 3;
        break;
      case "Mejorar la progresividad del sistema impositivo y ofrecer incentivos":
        frenteAmplio.points += 3;
        break;
      case "Simplificar el sistema impositivo y reducir impuestos a las empresas":
        nacional.points += 3;
        independiente.points += 3;
        colorado.points += 3;
        break;

      //Question 4
      case "Agricultura y agroindustria":
        cabildoAbierto.points += 3;
        colorado.points += 3;
        break;
      case "Biorrefinería, bioenergía y bioproductos":
        frenteAmplio.points += 3;
        break;
      case "Turismo y servicios":
        cabildoAbierto.points += 3;
        frenteAmplio.points += 3;
        break;
      case "Infraestructura y transporte":
        nacional.points += 3;
        break;

      //Question 5
      case "Reducir el gasto público en todos los rubros":
        cabildoAbierto.points += 3;
        break;
      case "Establecer reglas fiscales más estrictas":
        cabildoAbierto.points += 3;
        nacional.points += 3;
        break;
      case "Mejorar la eficiencia en la administración pública":
        independiente.points += 3;
        frenteAmplio.points += 3;
        colorado.points += 3;
        break;
      case "Limitar el ingreso de nuevos empleados al sector público":
        cabildoAbierto.points += 3;
        break;
      default:
        break;
    }
  });

  Object.entries(partyPoints).forEach(([party, details]) => {
    if (details.points > highestPoints) {
      setHighestPoints(details.points);
    }
  });

  return (
    <>
      <ShowResults partyPoints={partyPoints} highestPoints={highestPoints} />
    </>
  );
};

export default Results;
