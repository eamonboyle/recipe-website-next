import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export function GET(req: NextApiRequest, res: NextApiResponse) {

    return new NextResponse(JSON.stringify({ message: "Hello World" }), {
        status: 200,
    });
}