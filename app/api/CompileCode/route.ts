// app/api/judge/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
function decodeBase64(str?: string | null) {
    if (!str) return null;
    return Buffer.from(str, "base64").toString("utf-8");
}
export async function POST(req: NextRequest) {
    const body = await req.json();
    const { code, language_id } = body;
    console.log("Received code:", code);
    if (!code || !language_id) {
        return NextResponse.json(
            { error: "Missing code or language_id" },
            { status: 400 }
        );
    }

    const encodedCode = Buffer.from(code).toString("base64");

    try {
        const response = await axios.post(
            "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true",
            {
                source_code: encodedCode,
                language_id: language_id,
            },
            {
                headers: {
                    "content-type": "application/json",
                    "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,
                    "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
                },
            }
        );

        const data = response.data;

        return NextResponse.json({
            stdout: decodeBase64(data.stdout),
            stderr: decodeBase64(data.stderr),
            compile_output: decodeBase64(data.compile_output),
            status: data.stat
        })
    } catch (error: any) {
        return NextResponse.json(
            { error: "Execution failed", details: error.response?.data || error.message },
            { status: 500 }
        );
    }
}
