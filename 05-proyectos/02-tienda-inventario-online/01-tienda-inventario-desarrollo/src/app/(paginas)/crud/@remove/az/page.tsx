'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"

type TypeDel = {
    id: string

}
export default function Page() {


    const [delId, setDelId] = useState<TypeDel>({
        id: ''
    })


    // const searchDelete = useSearchParams()

    // useEffect(() => {

    //     if (searchDelete) {


    //         const delId = searchDelete.get('id')

    //         if (delId) {

    //             const payload = {
    //                 id: delId
    //             }


    //             fetch(`http://localhost:3000/smartphone/${delId}`, {
    //                 method: 'DELETE',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify(payload)
    //             })
    //                 .then(res => {
    //                     if (res.ok) {
    //                         console.log('La url es valida');
    //                     } else {
    //                         console.log('la url fallo ');

    //                     }
    //                 }).catch(error => {
    //                     console.log('error al conectarse al servidor', error);

    //                 });



    //         }

    //     }

    // }, [searchDelete])


    const handleDeleteSmart = (e: { preventDefault: any; }) => {

        e.preventDefault();
        if (delId.id) {




            fetch(`http://localhost:3000/smartphone/${delId.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(delId)
            })
                .then(res => {
                    if (res.ok) {
                        console.log('La url es valida');
                        setDelId({ id: '' })
                    } else {
                        console.log('la url fallo ');

                    }
                }).catch(error => {
                    console.log('error al conectarse al servidor', error);

                });






        }





    }


    return (
        <>
            <div className="flex  justify-center text-2xl">Eliminar los datos de la tabla smartphone </div>
            <form onSubmit={handleDeleteSmart}
                className="flex flex-col w-full    items-center gap-2 " >
                <div className="flex w-2/4 items-center justify-between">
                    <label htmlFor="id">Id:</label>
                    <input className="w-[88%] border-gray-500 border-2 border-dashed  h-[40px]" type="text" name="id" value={delId.id} id="id" placeholder="Id" required autoComplete="off" onChange={(e) => setDelId({ ...delId, id: e.target.value })} />
                </div>


                <div className="flex w-full my-2  justify-center   cursor-pointer h-[40px]">
                    <input type="submit" className=" w-1/12 text-white bg-red-500 cursor-pointer" value="Enviar" />
                </div>
            </form>
        </>
    )
}