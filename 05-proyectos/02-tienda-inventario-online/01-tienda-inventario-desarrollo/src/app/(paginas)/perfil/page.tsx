'use client'


import Link from "next/link";
import { useEffect } from 'react';
import { useRef } from 'react';

// export default function Page() {
//   return(
//     <>
//        <div>¡Bienvenido a mi perfil!</div>
//        <Link href="/">volver</Link>
//        </>
//    );
//   }


const Page: React.FC = () => {
  const dynamicParagRef = useRef<HTMLParagraphElement | null>(null);


  useEffect(() => {


    if (dynamicParagRef.current) {
      const idValue = dynamicParagRef.current;
      const secondLine = idValue.innerHTML.split(".")[1];


      const newElement = ` continuara Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quibusdam veniam consequatur, quo nesciunt quasi quas  <br/> corrupti architecto consequuntur consectetur neque veritatis magnam eligendi ducimus excepturi sunt sed dolorem alias.
       laceat illum?`;
      idValue.innerHTML = idValue.innerHTML.replace(secondLine, newElement);


      // idValue.innerHTML += newElement;


    } else {
      console.log('El elemento es nulo');
    }




    //   function adjustSecondLineSize() {
    //   const fontSize = parseFloat(window.getComputedStyle(dynamicParagraph).getPropertyValue("width"));
    //   const newSize = fontSize * 2; // Ajusta el tamaño como desees
    //   idValue.innerHTML = idValue.innerHTML.replace(secondLine, `todo achorado`);
    // }

    //   // `<small className="bg-red-500">${secondLine}</small>
    //   // adjustSecondLineSize();

    //   window.addEventListener("resize", adjustSecondLineSize);
  }, []);

  return (
    <div className=" p-4 w-full border-gray-500 border-2">
      <p ref={dynamicParagRef} id="dynamicparag" className="w-full line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit.  Lorem ipsum dolor sit amet consectetur adipisicing  elit Fugiat praesentium delectus nam eaque quis animi at, totam v</p>
    </div>
  );
};

export default Page;



// import { useEffect, useRef, useState } from 'react';

// const ParagraphComponent: React.FC = () => {
//   const dynamicParagraphRef = useRef<HTMLParagraphElement>(null);
//   const [secondLine, setSecondLine] = useState<string>('');

//   useEffect(() => {
//     const dynamicParagraph = dynamicParagraphRef.current;
//     const initialContent = dynamicParagraph.innerHTML;
//     const secondLineContent = initialContent.split("<br>")[1];

//     setSecondLine(secondLineContent);

//     function adjustSecondLineSize() {
//       const fontSize = parseFloat(window.getComputedStyle(dynamicParagraph).getPropertyValue("font-size"));
//       const newSize = fontSize * 0.7; // Ajusta el tamaño como desees
//       setSecondLine(`<span style="font-size: ${newSize}px">${secondLineContent}</span>`);
//     }

//     adjustSecondLineSize();

//     window.addEventListener("resize", adjustSecondLineSize);
//   }, []);

//   return (
//     <div className="container mx-auto p-4 max-w-screen-md border border-gray-300">
//       <p ref={dynamicParagraphRef} className="resize-text text-base max-w-full overflow-hidden overflow-ellipsis" dangerouslySetInnerHTML={{ __html: `Este es un ejemplo de un párrafo más largo que se mostrará en dos líneas ...<br />${secondLine}` }} />
//     </div>
//   );
// };

// export default ParagraphComponent;