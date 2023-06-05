import { useContext, useState } from "react";
import { UseContext } from "../contexts/AuthContext";

// import PlayList from "./Playlist";

// import parse from "html-react-parser";

const Main = () => {
  const { hostServidor } = useContext(UseContext);

  const [toggle, setToggle] = useState(false);

  const [input, setInput] = useState("");
  const [linkPh, setLinkPh] = useState("");

  const [formato, setFormato] = useState("mp3");

  const [tituloYt, setTituloYt] = useState("");
  const [descripcionYt, setDescripcionYt] = useState("");
  const [imageYt, setImageYt] = useState("");

  const [uriLinkYt, seturiLinkYt] = useState("");

  // const [count, setCount] = useState(0);

  // const changeContador = () => {
  //   setCount((contador) => contador + 1);
  // };

  const urlServidor = hostServidor;
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //* const abc = self.abc;
  // if (abc) {
  //   console.log("externo", abc.value);
  // }

  const clickFormat1 = (e) => {
    const dropdown = self.dropdown;

    const tmp3 = self.formatmp3;
    const tmp4 = self.formatmp4;
    const tm4a = self.formatm4a;

    const c1 = self.chk1;
    const c2 = self.chk2;
    const c3 = self.chk3;

    const selVal = self.selectboxValue;

    if (toggle) {
      dropdown.style.display = "none";
      setToggle(false);
    } else {
      dropdown.style.display = "flex";
      setToggle(true);
    }

    let activo = e.target.parentElement.className.split(" ")[0];

    console.log(activo);
    switch (activo) {
      case "audio-format":
        // console.log("es el primero");
        tmp3.classList.remove("active");
        tmp4.classList.add("active");
        tm4a.classList.add("active");

        c1.classList.add("check");
        c2.classList.remove("check");
        c3.classList.remove("check");

        selVal.textContent = tmp3.dataset.value;

        setFormato(tmp3.dataset.value);

        break;
      case "video-format":
        // console.log("es el segundo");
        tmp3.classList.add("active");
        tmp4.classList.remove("active");
        tm4a.classList.add("active");

        c1.classList.remove("check");
        c2.classList.add("check");
        c3.classList.remove("check");

        selVal.textContent = tmp4.dataset.value;

        setFormato(tmp4.dataset.value);

        break;
      case "sonido-format":
        // console.log("es el tercero");
        tmp3.classList.add("active");
        tmp4.classList.add("active");
        tm4a.classList.remove("active");

        c1.classList.remove("check");
        c2.classList.remove("check");
        c3.classList.add("check");
        selVal.textContent = tm4a.dataset.value;

        setFormato(tm4a.dataset.value);

        break;

      default:
        break;
    }
  };

  const handleEnlace = async () => {
    const abc = self.abc;

    const divConvert = self.divConvert;

    if (!abc.value) {
      console.log("esta en blanco descargar");
    } else {
      // setInput(abc.value);

      setLinkPh(input);

      abc.value = "";

      try {
        console.log("input de la descarga:", input);
        console.log("formato de la descarga :", formato);
        //todo lectura de datos de la API

        //*Solicitud al Api de youtube para obtener el titulo,etc

        let uriTitulo;

        let lpInput = input.trim();

        const payload = {
          urlEx: lpInput,
          format: formato,
        };

        await fetch(`${urlServidor}/data`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);

            uriTitulo = data.titulo;
          });

        //* solicitud al servidor para tener el archivo de descarga (Api de terceros)

        const startTime = performance.now();

        await fetch(`${urlServidor}/${formato}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then((response) => response.blob())
          .then((blob) => {
            // Calcular la duración
            const endTime = performance.now();
            const duration = (endTime - startTime) / 1000; // Duración en segundos
            console.log(`Duración de la descarga: ${duration} segundos`);

            // Crear una URL del objeto Blob
            const url = URL.createObjectURL(blob);

            // Crear un enlace de descarga
            const link = document.createElement("a");
            link.href = url;
            link.download = `${uriTitulo}.${formato}`;

            // Simular un clic en el enlace para iniciar la descarga
            link.click();

            // Liberar la URL del objeto Blob
            URL.revokeObjectURL(url);
          })
          .catch((error) => {
            console.error("Error al descargar el archivo:", error);
          });

        console.log("reseteo al boton convertir");
        divConvert.style.display = "none";
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleConvert = async (e) => {
    const abc = self.abc;
    const divConvert = self.divConvert;

    const btnConvert2 = self.btnConvert2;

    if (!abc.value) {
      return console.log("esta en blanco convert");
    } else {
      setLinkPh(input);

      console.log(e.target.className);
      if (e.target.className.split(" ")[1] === "rosa") {
        btnConvert2.classList.remove("rosa");
      } else {
        btnConvert2.classList.add("rosa");
      }

      //* peticion al servidor para extraer el titulo,  img, descripción,etc

      console.log("input de la conversion:", input);
      console.log("formato de la conversion:", formato);

      let lpInput = input.trim();

      const idUrl = lpInput.split("=")[1];

      const payload = {
        urlEx: lpInput,
        format: formato,
      };

      console.log(idUrl);
      let uriTitulo;
      let uriDescripcion;
      let uriImg;
      let uriPkYt;

      await fetch(`${urlServidor}/data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          uriTitulo = data.titulo;
          uriDescripcion = data.descripcion;
          uriImg = data.img;
          uriPkYt = data.uri;

          // high 360 * 480
        });

      setTituloYt(uriTitulo);
      setDescripcionYt(uriDescripcion);
      setImageYt(uriImg);
      seturiLinkYt(uriPkYt);
      //*mostrar el pantalla los datos
      setTimeout(() => {
        if (e.target.className.split(" ")[0] === "button-item") {
          divConvert.style.display = "flex";
        }
      }, 600);
    }
  };

  //* Fetch api youtube - terceros

  const handleContextMenu = (e) => {
    e.preventDefault(); // Evita que aparezca el menú contextual
  };

  // console.log(descripcionYt);
  console.log("input change - formato", ` ${linkPh} : ${formato}`);
  return (
    <>
      <div className="main__home">
        <div className="convertidor">
          <h3 className="tipico">
            --------------------- CONVERTIDOR MP4 ------------------------
          </h3>
        </div>
        <div className="input__div">
          <input
            onChange={handleChange}
            id="abc"
            className="input__link"
            type="text"
            placeholder="Paste link by https//:youtube.com"
            name="link"
            autoComplete="off"
          />
        </div>
        <span className="select__wraper">
          <div
            onClick={clickFormat1}
            id="select__main"
            className="select__main"
          >
            <div>
              <b>Fromat </b>
              <span id="selectboxValue">.mp3</span>
            </div>
            <div className="angle-down">
              <span>&#8964;</span>
            </div>
          </div>

          <div
            onClick={clickFormat1}
            id="dropdown"
            className="dropdown radiovideo1"
            tabIndex={1}
          >
            <ul className="dropdown2column">
              <li className="dropdown-header">Audio Formats</li>
              <li>
                <a
                  id="formatmp3"
                  className="audio-format"
                  name="ho"
                  data-value="mp3"
                >
                  <span id="chk1" className="check">
                    .mp3
                  </span>
                </a>
              </li>
            </ul>
            <ul className="dropdown2column">
              <li className="dropdown-header">Video Formats</li>
              <li>
                <a
                  id="formatmp4"
                  className="video-format active"
                  data-value="mp4"
                >
                  <span id="chk2">.mp4</span>
                </a>
              </li>
            </ul>
            <ul className="dropdown2column">
              <li className="dropdown-header">Sonido Formats</li>
              <li>
                <a
                  id="formatm4a"
                  className="sonido-format active"
                  data-value="m4a"
                >
                  <span id="chk3">.m4a</span>
                </a>
              </li>
            </ul>
          </div>
        </span>
        <div className="botones">
          <div onClick={handleConvert} className="enlace ">
            <button id="btnConvert2" className="button-item  ">
              CONVERT
            </button>
          </div>

          <div id="divConvert" className="lista__main">
            <div className="informacion__main">
              <div className="titulo__yt">
                <div className="txt__formato">
                  <h1>Titulo</h1>
                  <h1>{tituloYt}</h1>
                </div>
              </div>
              <div className="info__img">
                <div className="img__head">
                  <div>
                    <img className="img__size" src={imageYt} alt="img__yt" />
                  </div>
                  <div onContextMenu={handleContextMenu}>
                    <video
                      className="img__size tmsize"
                      controls
                      src={uriLinkYt}
                      controlsList="nodownload"
                    >
                      <source type="video/mp4"></source>
                    </video>
                  </div>
                </div>

                <div className="descripcion__yt">
                  <h2>Descripcion</h2>
                  <div className="txtDescripcion__yt">
                    <div>
                      <pre>{descripcionYt}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="enlace2">
              <button onClick={handleEnlace} className="button-item">
                DESCARGAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
// <div>{uriLinkYt && <h1>{uriLinkYt}</h1>}</div>

//* https://developers.google.com/youtube/v3/getting-started?hl=es-419
//*https://developers.google.com/youtube/v3/getting-started?hl=es

//*https://github.com/topics/youtube-to-mp3-api

//* testing de datos para verificar si se estan enviando al servidor
// import PlayList from "./Playlist";

// <div>
// {linkPh && (
//   <h1>
//     {linkPh} : {formato}
//   </h1>
// )}
// </div>

// <PlayList imgUrlYt={uriLinkYt} />
