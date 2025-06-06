import Form from "./components/Form"


function App() {

  return (
    <>
    <header className="flex justify-center items-center py-5 lg:py-10">
      <h1 className="text-4xl font-bold text-gray-900">Track your<span className="block text-5xl leading-7 text-blue-700/90">CryptoMonedas</span></h1>
    </header>

    <div className="mx-auto max-w-4xl">
      <Form/>
    </div>
    </>
  )
}

export default App
