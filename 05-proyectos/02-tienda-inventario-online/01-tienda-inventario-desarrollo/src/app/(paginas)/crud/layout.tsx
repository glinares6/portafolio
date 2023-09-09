'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default async function Layout({ children, get, post, patch, remove, folder1, folder2 }: {
    children: React.ReactNode
    get: React.ReactNode
    post: React.ReactNode
    patch: React.ReactNode
    remove: React.ReactNode
    folder1: React.ReactNode
    folder2: React.ReactNode

}) {
    // const [dat, setDat] = useState(true)

    const router = useRouter()

    const path = usePathname()


    useEffect(() => {
        path.split('/')[0]




    }, [path])



    // const loginSegments = useSelectedLayoutSegment('analytics')
    return (
        <>
            {/* <button className="border-blue-500 border-2" >Cambio</button> */}
            <br />
            <div className=' flex  flex-row justify-around  text-center border-blue-500 border-2  '>
                <button className='border-red-500 border-2 cursor-pointer w-[10%] py-2 ' type="button" onClick={() => router.push('/crud/at')}>
                    get
                </button>
                <br />
                <button className='border-red-500 border-2 cursor-pointer w-[10%] py-2 ' type="button" onClick={() => router.push('/crud/ax')}>
                    post
                </button>
                <br />
                <button className='border-red-500 border-2 cursor-pointer w-[10%] py-2 ' type="button" onClick={() => router.push('/crud/aw')}>
                    patch
                </button>
                <br />
                <button className='border-red-500 border-2 cursor-pointer w-[10%] py-2 ' type="button" onClick={() => router.push('/crud/az')}>
                    delete
                </button>
            </div>
            {/* <Link href="/crud/at">analytics</Link>
            <br />
        <Link href="/crud/ax">team</Link> */}

            {path.includes('at') ? get : ""}
            {path.includes('ax') ? post : ""}
            {path.includes('aw') ? patch : ""}
            {path.includes('az') ? remove : ""}


            {/* <div className="flex  justify-around text-center ">
                <div className="border-blue-500 border-2 py-12 w-full">{folder1}</div>
                <div className="border-blue-500 border-2 py-12 w-full ">{folder2}</div>


            </div> */}
            {/* {children} */}
        </>
    )
}