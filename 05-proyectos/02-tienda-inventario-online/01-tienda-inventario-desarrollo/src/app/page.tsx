"use client"
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


import ListSmartphone from "./components/list-smartphone";
import { useCallback } from "react";



export default function Page() {
  // <div className="grid grid-cols-[250px,1fr] justify-center	border-purple-700 border-2 py-7  px-5 w-11/12">


  const router = useRouter();
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)



      return params.toString()
    },
    [searchParams]
  )




  const handlePaginacion = (pa: string, ge: string) => {
    return router.push(pathname + '?' + createQueryString(pa, ge))
  }



  const search = searchParams.get('page')


  return (
    <>
      <main>
        <div className="flex justify-center " >
          <div className="grid grid-cols-[250px,1fr]   justify-center	  w-11/12 ">
            <div className="border-red-700 border-2 px-3 py-5">
              <h1>barra lateral isquierda</h1>
              <p>todo lo que se te ocurra</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perferendis quidem voluptatum reiciendis? Explicabo perferendis cumque quo quod, atque, rem neque hic repellendus, non sequi corporis possimus necessitatibus magnam minus.
                Natus sunt, recusandae molestiae neque, autem aliquid perspiciatis corporis omnis ab libero tenetur nam asperiores fugiat voluptatem maiores facere consectetur. Quas nihil adipisci officiis voluptates obcaecati, animi perspiciatis temporibus laudantium.
                Sequi beatae ratione dicta dolore pariatur repudiandae corporis fuga perferendis harum eaque. Nam suscipit rem magni quis. Voluptatibus recusandae minus nulla tempora? Illo neque voluptatem odit culpa similique dignissimos laborum.
                Nisi placeat voluptatibus quam, blanditiis laboriosam corporis enim sed molestiae possimus eligendi commodi soluta maiores tenetur maxime aliquam consectetur error sunt sequi unde nemo incidunt quasi quidem. Adipisci, saepe rem.
                Itaque, earum repudiandae possimus maiores praesentium minima voluptas, omnis voluptatem asperiores nam, illo explicabo repellat perspiciatis. Pariatur nesciunt porro dolores quae commodi omnis, nulla incidunt qui dolore inventore officiis nobis!
              </p>
            </div>

            <div className="h-full grid grid-cols-3 grid-rows-[repeat(4,1fr)]">

              <ListSmartphone picture="/img/01-smartphone/01-moto-e22.webp" title={`Smartphone  MOTOROLA Motorola  E22 6.5   4GB 128GB <br/>   16MP + 2MP Gris`} from="Por Plaza Vea" offer1={599} offer2={499} current={469} />


              <ListSmartphone picture="/img/01-smartphone/03-xiaomi-poco-m5s.webp" title={`Smartphone XIAOMI POCO M5S 6.43" 6GB 128GB<br/> 64MP+8MP+2M+2MP Gris`} from="Por Plaza Vea" offer1={1099} offer2={799} current={749} />


              <ListSmartphone picture="/img/01-smartphone/04-samsung-s21-fe.webp" title={`Smartphone SAMSUNG S21 FE 5G 6.2'' 6GB 128GB<br/> 12MP + 12MP + 8MP Gris`} from="Por Plaza Vea" offer1={false} offer2={1999} current={false} />



              <ListSmartphone picture="/img/01-smartphone/05-zte-a51.webp" title={`Smartphone ZTE \nBLADE A51 Lite 6.09" 2GB 32GB<br/> 13MP+2MP Azul`} from="Por Plaza Vea" offer1={269} offer2={229} current={false} />

              <ListSmartphone picture="/img/01-smartphone/07-xiaomi-redmi-12.webp" title={`Smartphone REDMI Note 12 6.67" 4GB 128GB<br/> 50MP Gris`} from="Por Plaza Vea" offer1={949} offer2={749} current={699} />

              <ListSmartphone picture="/img/01-smartphone/02-moto-g13.webp" title={`Smartphone MOTOROLA Motorola G13 6.5" 4GB 128GB <br/>50MP+2MP+2MP Gris`} from="Por Plaza Vea" offer1={false} offer2={599} current={559} />


              <ListSmartphone picture="/img/01-smartphone/06-samsung-galaxy-a34.webp" title={`Smartphone SAMSUNG Galaxy A34 6.6" 6GB 128GB<br/> 48MP + 8MP + 5MP Grafito`} from="Por Plaza Vea" offer1={1199} offer2={1149} current={1049} />


              <ListSmartphone picture="/img/01-smartphone/08-samsung-galaxy-a24.webp" title={`Smartphone SAMSUNG Galaxy A24 6.5" 4GB 128GB<br/> 50MP + 5MP + 2MP Negro`} from="Por Plaza Vea" offer1={999} offer2={749} current={679} />

              <ListSmartphone picture="/img/01-smartphone/10-xiaomi-redmi-a2.webp" title={`Smartphone XIAOMI Redmi A2 6.5" 2GB 32GB<br/> 8MP Negro`} from="Por Plaza Vea" offer1={409} offer2={299} current={279} />

              <ListSmartphone picture="/img/01-smartphone/11-honor-x7a.webp" title={`Smartphone HONOR X7A 6.7" 6GB 128GB 50MP + 5MP<br/> + 2MP + 2MP Silver`} from="Por Plaza Vea" offer1={899} offer2={729} current={689} />


              <ListSmartphone picture="/img/01-smartphone/09-samsung-galaxy-a54.webp" title={`Smartphone SAMSUNG Galaxy A54 6.4" 6GB 128GB<br/> 50MP + 12MP + 5MP Grafito`} from="Por Plaza Vea" offer1={1699} offer2={1499} current={1349} />

              <ListSmartphone picture="/img/01-smartphone/12-samsung-galaxy-a14.webp" title={`Smartphone SAMSUNG Galaxy A14 6.6" 4GB 128GB<br/> 50MP + 5MP + 2MP Negro`} from="Por Plaza Vea" offer1={799} offer2={649} current={589} />


            </div>


            <div className="flex  items-center justify-end my-3 col-span-2 ">
              <h1 className="text-lg mr-3">Estás en la pagina</h1>

              <div className="flex gap-x-2  ">
                <button onClick={() => handlePaginacion("page", "1")} className="flex justify-center  items-center  text-white  bg-black text-sm underline w-9 h-8 hover:bg-black hover:text-white">1</button>
                <button onClick={() => handlePaginacion("page", "2")} className="flex justify-center  items-center   text-sm underline w-9 h-8 hover:bg-black hover:text-white">2</button>
                <button onClick={() => handlePaginacion("page", "3")} className="flex justify-center  items-center   text-sm underline w-9 h-8 hover:bg-black hover:text-white">3</button>
                <button onClick={() => handlePaginacion("page", "4")} className="flex justify-center  items-center   text-sm underline w-9 h-8 hover:bg-black hover:text-white">4</button>
                <button onClick={() => handlePaginacion("page", "5")} className="flex justify-center  items-center   text-sm underline w-9 h-8 hover:bg-black hover:text-white">...</button>
                <button onClick={() => handlePaginacion("page", "6")} className="flex justify-center  items-center   text-sm underline w-9 h-8 hover:bg-black hover:text-white">6</button>
              </div>
            </div>


            <div className=" border-blue-800 border-2">
              <h1 className="text-2xl">imprimir los datos</h1>
              <h5 className="text-sm">imprimir los datos</h5>
            </div>

            <div className=" grid  grid-cols-4 border-blue-800 border-2">
              <h1 className="col-span-2 text-2xl border-blue-800 border-2">imprimir los datos</h1>
              <h5 className="text-sm border-blue-800 border-2">imprimir los datos</h5>
              <h5 className="text-3xl border-blue-800 border-2">imprimir los datos</h5>
            </div>


          </div>



          <h1>El valor de la pagina es ...    <h1> {search}</h1> </h1>



        </div>


      </main>

    </>
  );
}

// ESTILOS CSS BASE

// flex min-h-screen flex-col items-center justify-between p-24

// <h1 className="text-3xl font-bold underline">hello word</h1>
