export default function userApp() {
    const server = process.env.NEXT_PUBLIC_SERVER || 'http://localhost:3000';


    const userGetAuth = async () => {
        const userGet = await fetch(`${server}/users`)

        return userGet.json();
    }

    return {
        userGetAuth,
        server
    }
}