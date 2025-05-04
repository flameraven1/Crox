import { NextResponse } from "next/server";

export async function GET (){
    const access = await fetch("https://croxyproxy.com");
    const res = await access.text();

    console.log(res)

    return new NextResponse(res);
}