export default function paymentApp(){

    
    const server = process.env.NEXT_PUBLIC_SERVER || "http://localhost:3000";
    return{
        server
    }
}