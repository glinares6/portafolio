

export default function smartphoneApp() {

    const server = "https://helped-hermit-jointly.ngrok-free.app";

    const smartphoneGet = async () => {

        const smartphoneGet = await fetch(`${server}/smartphone`,
            {

                headers: {
                    "ngrok-skip-browser-warning": "69420",
                },

            }
        )
        return await smartphoneGet.json()

    }
    const smartphoneGetOne = async (getIdSmart: any) => {
        const smartGetOne = await fetch(`${server}/smartphone/${getIdSmart}`,
            {

                headers: {
                    "ngrok-skip-browser-warning": "69420",

                },

            }
        )

        return await smartGetOne.json()
    }

    return {
        smartphoneGet,
        smartphoneGetOne,
        server
    }
}