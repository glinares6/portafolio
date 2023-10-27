import React, { useEffect, useState } from "react"
import { useRef } from 'react';
import ReactPlayer from 'react-player';


import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
interface Props {
    id: number
    picture: string
    title: string
    from: string
    offer1: any
    offer2: number
    current: any


}



const ListSmartphoneRp: React.FC<Props> = ({ id, picture, title, from, offer1, offer2, current }) => {



    const parseData = useRef<HTMLParagraphElement | null>(null);

    const [modalImg, setModalImg] = useState(false)


    useEffect(() => {
        if (parseData.current) {

            const idValue = parseData.current;

            // const div = document.createElement('div');
            // div.innerHTML = title

            // const parsedContent = div.innerHTML;
            // idValue.innerHTML = parsedContent;
            idValue.innerHTML = title;
        }
    })


    const searchIdSmart = useSearchParams()
    const router = useRouter();

    const handleUd = (dt: string, id: string) => {
        const params = new URLSearchParams(searchIdSmart.toString())

        params.set('id', id)
        router.push(`/crud/${dt}` + '?' + params.toString())
    }


    // console.log('picture de este elemento', picture);
    // const pictureConvert = picture.split('/')
    // const picture1 = pictureConvert.at(-2)
    // const picture2 = pictureConvert.at(-1)

    // //* ruta del tunnel localhost:5000
    // const newPicture = `https://nest-online-build.onrender.com/public/img/${picture1}/${picture2}`


    const handleResizeImg = () => {
        if (modalImg) {
            setModalImg(false)
        } else {
            setModalImg(true)
        }
    }
    return (
        <div className="grid grid-cols-1 grid-rows-[1fr_200px_50px] border-purple-700 border-2">
            {modalImg && <div className=" absolute z-30  flex left-0 justify-end w-[75%] max-sm:w-[90%]  cursor-pointer" onClick={handleResizeImg}> <svg
                x-show="open"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg></div>}
            {modalImg && <div className=" absolute z-20  flex left-0 justify-center w-full h-full   cursor-pointer" > {(picture.includes('.webp') || picture.includes('.jpeg') || picture.includes('.png')) || picture.includes('.jpg') ||
                picture.includes('.svg') ? <Image
                onClick={handleResizeImg}
                width="0"
                height="0"
                sizes="100vw"
                className="w-[100%]  max-w-[550px] h-[100%] max-h-[900px] max-sm:w-[80%] max-sm:max-w-[350px] max-sm:h-[100%]"
                src={picture}
                alt="Picture of the author" /> : ''}</div>}
            <div className="flex justify-center pt-3 cursor-pointer ">
                {(picture.includes('.webp') || picture.includes('.jpeg') || picture.includes('.png')) ||
                    picture.includes('.jpg') ||
                    picture.includes('.svg') ? <Image
                    onClick={handleResizeImg}
                    className="w-auto h-auto px-9 "
                    src={picture}
                    width="250"
                    height="300"
                    alt="Picture of the author"
                /> : ''}
                {(picture.includes('.mp4') || picture.includes('.mp3')) ? <video src={picture} controls>{title}</video> : ''}
                {/* {(picture.includes('.mp4') || picture.includes('.mp3')) ? <ReactPlayer url={newPicture} controls={true}>{title}</ReactPlayer> : ''} */}
            </div>
            <div className="px-2 py-2  ">

                <div className="w-full  h-12 text-1xl font-bold   ">
                    {/* <p className=" text-ellipsis overflow-hidden whitespace-pre	">{title} </p> */}
                    <p ref={parseData} className="  line-clamp-2" ></p>
                </div>

                <p className="text-base">{from}</p>
                {offer1 ? <p className="text-sm">S/{offer1} un</p> : <p className="h-5">{""}</p>}
                <p className="text-2xl font-bold text-red-500">S/{offer2} un</p>
                {current ? <p className="text-2xl font-bold text-blue-500">S/{current} un</p> : <p className="h-8">{""}</p>}

            </div  >
            <div className="w-full flex justify-center items-start" >
                <input
                    type="button"
                    onClick={() => handleUd('aw', `${id}`)}
                    className="w-4/5 font-bold text-white h-10 bg-red-600 rounded-3xl cursor-pointer"
                    value="ACTUALIZAR"
                />
            </div>
            <div className="w-full flex justify-center items-start pb-2" >
                <input
                    type="button"
                    onClick={() => handleUd('az', `${id}`)}
                    className="w-4/5 font-bold text-white h-10 bg-red-600 rounded-3xl cursor-pointer"
                    value="ELIMINAR"
                />
            </div>

        </div >

    )
}

export default ListSmartphoneRp