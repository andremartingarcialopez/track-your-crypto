import { useState } from "react";
import { currencies } from "../data/data";
import { useCryptoStore } from "../store/store";
import ErrorMessage from "./ErrorMessage";
import type { SelectForm } from "../types/types";

export default function Form() {

    const { cryptosSelect, fetchCryptoInfo } = useCryptoStore();
    const [error, setError] = useState("");
    const [selectForm, setSelectForm] = useState<SelectForm>({
        currency: "",
        cryptoCurrency: ""
    });

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelectForm({
            ...selectForm,
            [e.target.id]: e.target.value
        })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (Object.values(selectForm).includes("")) {
            setError("Todos los campos son obligatorios");
            return;
        }

        setError("");
        fetchCryptoInfo(selectForm);
    }

    return (
        <form onSubmit={handleSubmit} className="glass p-5 mx-2 mb-4 flex flex-col justify-center items-stretch space-y-4">
            {error &&
                <ErrorMessage>
                    {error}
                </ErrorMessage>
            }
            <div>
                <label className="font-semibold text-gray-800" htmlFor="currency">Moneda</label>
                <select className="glass w-full px-1 py-2"
                    id="currency"
                    value={selectForm.currency}
                    onChange={handleChange}>
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
                    id="cryptoCurrency"
                    value={selectForm.cryptoCurrency}
                    onChange={handleChange}>
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
