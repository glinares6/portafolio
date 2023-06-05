import Header from "../components/Header";

const Faq = () => {
  return (
    <>
      <Header />
      <div className="faq__main">
        <div>
          <p>El video en formato mp4 con una resolucion de::</p>
          <p className="faq__formato">720p , 360</p>
        </div>
        <div>
          <p>El formato del audio es:</p>
          <p className="faq__formato"> mp3, m4a</p>
        </div>
      </div>
    </>
  );
};

export default Faq;
