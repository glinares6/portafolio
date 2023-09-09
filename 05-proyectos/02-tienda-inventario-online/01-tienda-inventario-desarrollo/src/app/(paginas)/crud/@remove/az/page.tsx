
export default async function Page() {
    return (
        <>
            <div className="flex  justify-center text-2xl">Eliminar los datos de la tabla smartphone </div>
            <form className="flex flex-col w-full    items-center gap-2 " >
                <input className="w-1/4 border-gray-500 border-2 border-dashed   h-[40px]" type="text" name="id" id="id" placeholder="id" required />
                <div className="flex w-1/12 justify-center  border-gray-500 border-2 cursor-pointer h-[40px]">
                    <input className=" w-full text-white bg-red-500" type="submit" value="Enviar" />
                </div>
            </form>
        </>
    )
}