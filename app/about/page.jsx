import MacWindow from "../components/MacWindow"

const About = () => {
  return (
    <MacWindow>
      <h1 className="text-2xl">About</h1>
      <p>
        This web app is a single response chatbot that uses OpenAI's GPT-3 API to generate a response to your input. It is built with Next.js 13 and Tailwind CSS. It also uses Daisy UI for Tailwind CSS. The source code is available on <a href="https://github.com/Lakshit-Chiranjiv/mini-gpt" className="text-blue-500">GitHub</a>. It makes use of new NEXT JS 13 app directory structure, folder based routing, linking and image optimization, cached data fetching, client and server components, api route handlers. It also uses Tailwind CSS JIT compiler for faster development and smaller bundle size.
      </p>

      <hr className="my-4"/>

      <h2 className="text-xl mt-4">How it works</h2>
      <p>
        The app uses the <a href="https://openai.com/blog/openai-api/" className="text-blue-500">OpenAI API</a> to generate a response to your input. The API is a paid service, so you will need to create an account and get an API key to use it. Here, I have used my API key, but you can use your own by setting the <code>OPEN_AI_API_KEY</code> environment variable in <code>.env.local</code>.
      </p>

      <hr className="my-4"/>

      <h2 className="text-xl mt-4">How to use</h2>
      <p>
        Type in your input in the text box provided and press submit. You will be redirected to a page with the response generated by the API.
      </p>

      <hr className="my-4"/>

      <h2 className="text-xl mt-4">About the developer</h2>
      <p>
        This app was developed by <a href="https://github.com/Lakshit-Chiranjiv" className="text-blue-500">Lakshit Chiranjiv Sagar</a>. I am currently a 4th year undergraduate student at <span className="bg-green-500 text-white px-2 rounded">KIIT</span>. Also doing an internship at <span className="bg-indigo-500 text-white px-2 rounded">FICO</span> as a Cloud Engineer. I have domain interests and knowledge in <span className="bg-indigo-500 text-white px-2 rounded">Full Stack Web Development</span>, <span className="bg-yellow-500 text-white px-2 rounded">Full Stack Web Development</span>, <span className="bg-lime-500 text-white px-2 rounded">Blockchain Development</span>, <span className="bg-purple-500 text-white px-2 rounded">Data Analytics & ML</span>, <span className="bg-amber-500 text-white px-2 rounded">Cloud computing</span>, <span className="bg-emerald-500 text-white px-2 rounded">Devops</span> and <span className="bg-cyan-500 text-white px-2 rounded">Flutter & React Native App Development</span>. Would love to connect with you on <a href="https://www.linkedin.com/in/lakshit-chiranjiv-sagar-4b0b15198/" className="text-blue-500">LinkedIn</a>.
      </p>
    </MacWindow>
  )
}

export default About