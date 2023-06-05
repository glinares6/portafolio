import Header from "../components/Header";

const Faq = () => {
  return (
    <>
      <Header />
      <div className="faq__main">
        <div>
          <p>El video en formato mp4 con una resolucion de::</p>
          <p className="faq__formato">720p , 360p , etc</p>
        </div>
        <div>
          <p>El formato del audio es:</p>
          <p className="faq__formato"> mp3, m4a</p>
          <p>No soporta la reproducción y descarga en tiempo real.</p>
        </div>
      </div>
    </>
  );
};

export default Faq;
