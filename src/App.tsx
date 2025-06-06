import { useEffect } from "react"
import Form from "./components/Form"
import { useCryptoStore } from "./store/store"


function App() {

  const { fetchCryptos } = useCryptoStore()

  useEffect(() => {
    fetchCryptos()
  }, [fetchCryptos])
  return (
    <>
      <header className="flex justify-center items-center py-5 lg:py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Track your<span className="block text-3xl md:text-5xl leading-7 text-blue-700/90">CryptoMonedas</span></h1>
      </header>

      <div className="mx-auto max-w-4xl">
        <Form />
      </div>
    </>
  )
}

export default App
