

export default function smartphoneApp() {

    const server = process.env.NEXT_PUBLIC_SERVER || "http://localhost:3000";

    const smartphoneGet = async () => {

        const smartphoneGet = await fetch(`${server}/smartphone`)
        return smartphoneGet.json()

    }
    const smartphoneGetOne = async (getIdSmart: any) => {
        const smartGetOne = await fetch(`${server}/smartphone/${getIdSmart}`)

        return smartGetOne.json()
    }

    return {
        smartphoneGet,
        smartphoneGetOne,
        server
    }
}