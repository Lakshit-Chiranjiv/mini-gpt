import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
 
  return NextResponse.json({ data }) 
}

export async function POST(request) {
  const reqObj = await request.json()
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPEN_AI_API_KEY}`,
    },
    body: JSON.stringify(
      {
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: reqObj.text}],
      }
    )
  })
  const data = await res.json()
 
  return NextResponse.json(data)
}