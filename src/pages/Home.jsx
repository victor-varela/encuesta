import { Link } from "react-router-dom";
import imgFa from "../assets/partido-fa.png";
import imgNacional from "../assets/partido-nacional.png";
import imgColorado from "../assets/partido-colorado.png";
import imgIndependiente from "../assets/partido-independiente.png";
import imgCabildo from "../assets/partido-cabildo-abierto.png";

const Home = () => {
  return (
    <main className="flex flex-col-reverse justify-center gap-10 lg:flex-row">
      <div className="flex flex-wrap w-full lg:w-1/2 gap-4 px-6 py-3 logos intro">
        <div>
          <img src={imgFa} alt="frente amplio" />
        </div>
        <div>
          <img src={imgNacional} alt="partido nacional" />
        </div>
        <div>
          <img src={imgColorado} alt="partido colorado" />
        </div>
        <div>
          <img
            src={imgIndependiente}
            alt="partido-independiente"
          />
        </div>
        <div>
          <img
            src={imgCabildo}
            alt="partido-cabildo-abierto"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6 w-full lg:w-1/2 p-5">
        <div className="rounded-2xl">
          <h1 className="text-6xl text-center text-amber-400 uppercase font-extrabold  font-mono title">
            Descubre que partido votar segun sus{" "}
            <span className="font-extrabold text-black">propuestas</span>
          </h1>
          <p className="text-center text-indigo-800 font-bold my-4 text-4xl">
            Contesta la encuesta para saber que{" "}
            <span className="text-black uppercase">candidato</span> se alinea
            con tus preferencias
          </p>
        </div>
        <Link
          className="px-8 py-6 w-fit self-center border bg-yellow-500 hover:bg-yellow-600 rounded-xl  text-white  uppercase font-bold"
          to={"/comenzar"}
        >
          iniciar
        </Link>
      </div>
    </main>
  );
};

export default Home;
