

export default function smartphoneApp() {

    const server = 'https://nest-online-build.onrender.com'

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
        smartphoneGetOne
    }
}