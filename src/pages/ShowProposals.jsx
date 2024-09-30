import imgFa from "../assets/partido-fa.png";
import imgNacional from "../assets/partido-nacional.png";
import imgColorado from "../assets/partido-colorado.png";
import imgIndependiente from "../assets/partido-independiente.png";
import imgCabildo from "../assets/partido-cabildo-abierto.png";

const ShowProposals = ({ proposals, candidate }) => {
  const getImagePath = (candidate) => {
    const imagePaths = {
      "Alvaro Delgado": imgNacional,
      "Yamandu Orsi": imgFa,
      "Andres Ojeda": imgColorado,
      "Pablo Mieres": imgIndependiente,
      "Guido Manini Rios": imgCabildo,
    };

    return imagePaths[candidate];
  };

  const imagePath = getImagePath(candidate);

  const formatProperty = (property) => {
    return property
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Contenedor de la foto y nombre del candidato */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl mb-8">
        <div className="flex items-center p-6">
          <img
            src={imagePath}
            alt=""
            className="w-24 h-24 rounded-full mr-6 border-2 border-gray-300"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{candidate}</h2>
            <p className="text-gray-600">
              Propuestas en las áreas de seguridad y economía
            </p>
          </div>
        </div>
      </div>

      {/* Contenedor de las propuestas */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Propuestas del Candidato Seleccionado
        </h2>
        {Object.keys(proposals).map((category) => (
          <div key={category}>
            <h3 className="uppercase my-4">{category}</h3>
            <ul className="space-y-4">
              {Object.keys(proposals[category]).map((subject) => (
                <li
                  className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-md"
                  key={subject}
                >
                  <strong>{formatProperty(subject)}: </strong>
                  {`${proposals[category][subject]}.`}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowProposals;
