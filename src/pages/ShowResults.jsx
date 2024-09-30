import { proposals } from "../data";
import ShowProposals from "./ShowProposals";
import { useState} from "react";

const ShowResults = ({ partyPoints, highestPoints }) => {

  const [selectedProposals, setSelectedProposals] = useState(null);
  const [showProposals, setShowProposals] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleShowProposals = (candidate) => {
    setSelectedCandidate(candidate);
    const getParty = (candidate) => {
      const party = {
        "Alvaro Delgado": "nacional",
        "Yamandu Orsi": "frenteAmplio",
        "Andres Ojeda": "colorado",
        "Pablo Mieres": "independiente",
        "Guido Manini Rios": "cabildoAbierto",
      };

      return party[candidate];
    };

    const party = getParty(candidate);

    const result = {};

    Object.keys(proposals).forEach((category) => {
      result[category] = {};
      Object.keys(proposals[category]).forEach((subject) => {
        result[category][subject] = proposals[category][subject][party];
      });
    });

    setSelectedProposals(result);
    setShowProposals(true);
  };

  const handleBackToResults = () => {
    setShowProposals(false);
  };

  return (
    <>
      {!showProposals ? (
        <>
          <h1 className="text-2xl font-black">Resultados</h1>
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                          Candidato
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                          Puntaje
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                      {Object.values(partyPoints).map((party) => (
                        <tr key={party.candidate}>
                          <td
                            className={` ${
                              party.points === highestPoints
                                ? "bg-blue-100"
                                : "bg-transparent"
                            } px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-800 `}
                          >
                            {party.candidate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {party.points}
                          </td>
                          <td>
                            <button
                              onClick={() =>
                                handleShowProposals(party.candidate)
                              }
                              className={`${
                                party.points === highestPoints
                                  ? "block"
                                  : "hidden"
                              } px-6 py-4 border rounded-lg bg-slate-300 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200`}
                            >
                              Ver Propuestas
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={handleBackToResults}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Volver a Resultados
          </button>
          <ShowProposals
            proposals={selectedProposals}
            candidate={selectedCandidate}
          />
        </>
      )}
    </>
  );
};

export default ShowResults;
