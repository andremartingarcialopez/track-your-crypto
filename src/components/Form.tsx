import { currencies } from "../data/data";
import { useCryptoStore } from "../store/store";

export default function Form() {

    const { cryptosSelect } = useCryptoStore()

    return (
        <form className="glass p-5 mx-2 mb-4 flex flex-col justify-center items-stretch space-y-4">
            <div>
                <label className="font-semibold text-gray-800" htmlFor="currency">Moneda</label>
                <select className="glass w-full px-1 py-2"
                    id="currency">
                    <option value="">--Seleccionar--</option>
                    {currencies.map(function (currency) {
                        return (
                            <option key={currency.code} value={currency.code}>{currency.name}</option>
                        )
                    })}
                </select>
            </div>

            <div>
                <label className="font-semibold text-gray-800" htmlFor="cryptoCurrency">CryptoMoneda</label>
                <select className="glass w-full px-1 py-2"
                    id="cryptoCurrency">
                    <option value="">--Seleccionar--</option>
                    {cryptosSelect.map(function (crypto) {
                        return (
                            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.Name}</option>
                        )
                    })}
                </select>
            </div>

            <input className="glass mt-2 p-2 uppercase text-gray-800 hover:font-bold cursor-pointer active:font-normal"
                type="submit"
                value={"Ver Precio"} />
        </form>
    )
}
