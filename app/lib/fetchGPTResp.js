const fetchGPTResponse = async (prompt) => {
    const reqObj = {
        text: prompt
    }
    const response = await fetch('http://localhost:3000/api/askminigpt', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqObj)
    })
    const data = await response.json()
    return data
}

export default fetchGPTResponse