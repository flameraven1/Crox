export default async function GET (){
    const access = await fetch("https://croxyproxy.com" , {
        method : "GET"
    });

    console.log(access)
}