export default function smartphoneApp() {

    const smartphoneGet = async () => {

        const smartphoneGet = await fetch('https://p9jbwwh0-3000.brs.devtunnels.ms/smartphone')
        return smartphoneGet.json()

    }
    const smartphoneGetOne = async (getIdSmart: any) => {
        const smartGetOne = await fetch(`https://p9jbwwh0-3000.brs.devtunnels.ms/smartphone/${getIdSmart}`)

        return smartGetOne.json()
    }

    return {
        smartphoneGet,
        smartphoneGetOne
    }
}