const API_KEY ="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"
async function fetchData(){
    const respose = await fetch("https://api.openapi.com/v1/completions",{
        method: "POST",
        headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "Content-Type" :"application/json"
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: "hello, how are you today",
          max_tokens: 7
        })
    })
    const data =await respose.json()
    console.log(data)
}

fetchData()