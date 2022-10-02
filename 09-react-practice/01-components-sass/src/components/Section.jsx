import { useContext } from "react";
import { UseContext } from "../contexts/AuthContext";
import { useMain } from "../hooks/useMain";

const Section = () => {
  //* custon Hooks
  const [getInfo, localidad, num, real2] = useMain();
  const { appcontext } = useContext(UseContext);
  return (
    <div className="section__main">
      <h1>Section</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
        exercitationem quos ea quis enim necessitatibus culpa ipsam
        consequuntur, tenetur rem animi. Delectus iste, aut neque optio
        repudiandae nihil vero est. Officia, temporibus enim eius quasi harum
        quod quas mollitia et accusantium tempore quibusdam in fugiat aspernatur
        incidunt consectetur aliquid molestiae laudantium eos quo quidem
        corrupti accusamus! Veritatis cumque quibusdam rerum. Possimus
        asperiores nostrum quia ipsum voluptatem dolor sed nisi omnis impedit
        repellendus quae nemo, necessitatibus et, tempora numquam incidunt!
        Sapiente voluptatibus odio dignissimos natus iure dolorem quae amet.
        Blanditiis, fugit. Expedita, a nesciunt excepturi aperiam provident
        atque nostrum corrupti repudiandae tempora ducimus consequatur, quod
        ullam nihil aliquam! Debitis, optio repellat doloribus natus aliquam
        reiciendis quaerat, labore animi quos ea exercitationem. Officiis
        corporis ducimus minima delectus blanditiis fugit id natus voluptate
        dolorem dolorum adipisci similique laudantium consequuntur, at sit quos
        temporibus labore doloremque dolores ad repudiandae impedit facilis
        illo? Optio, magni. Incidunt, quisquam. Qui inventore excepturi
        blanditiis dolorum repellat! Excepturi rem atque, minima cum illum
        libero sed. Culpa sed in minima. Animi eum deserunt quam necessitatibus
        corrupti facere autem? Provident, vitae. Laudantium ut pariatur
        recusandae rerum, tempore repellendus magnam, odit tempora natus illo
        maiores aut doloremque modi maxime dolor? Corrupti, molestiae eligendi
        error exercitationem dicta distinctio iure deserunt nihil repellendus
        non!
      </p>
      <h1>{getInfo()}</h1>
      <h1> La fecha {new Date().toLocaleDateString()}</h1>
      <h1>{localidad}</h1>
      <h1>{num}</h1>
      <button onClick={real2}> HORA</button>
      <hr />
      <h1>use context</h1>
      <div>
        {!appcontext ? (
          <div>I am styled by theme context!</div>
        ) : (
          <div
            style={{
              background: appcontext.light.background,
              color: appcontext.light.foreground,
            }}
          >
            En simultaneo 2
          </div>
        )}
      </div>
    </div>
  );
  // <button onClick={real}> HORA</button>
};

export default Section;
