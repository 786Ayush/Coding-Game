export const CompileCode = async (code: string, language_id: number, input: any) => {
    const response = await fetch("/api/CompileCode", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, language_id,input }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to compile code");
    }

    return response.json();
}