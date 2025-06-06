import axios from "axios";
import { create } from "zustand";
import { SchemaCryptoInfo, SchemaCryptoSelect } from "../schemas/schemas";
import type { CryptoInfo, CryptoSelect, SelectForm } from "../types/types";
import { devtools } from "zustand/middleware";


type CryptoStoreTypes = {
    cryptosSelect: CryptoSelect
    cryptoInfo: CryptoInfo
    spinner: boolean
    fetchCryptos: () => void
    fetchCryptoInfo: (selectForm: SelectForm) => void

}

export const useCryptoStore = create<CryptoStoreTypes>()(
    devtools((set) => ({
        cryptosSelect: [],
        spinner: false,
        cryptoInfo: {
            PRICE: "",
            LOWDAY: "",
            HIGHDAY: "",
            IMAGEURL: "",
            LASTUPDATE: "",
            CHANGE24HOUR: "",
        },
        fetchCryptos: async () => {
            const result = await getCryptos();
            set((set) => ({
                ...set,
                cryptosSelect: result

            }))
        },

        fetchCryptoInfo: async (selectForm: SelectForm) => {
            set((state) => ({
                ...state,
                spinner: true
            }))
            const result = await getCryptoInfo(selectForm)
            set((state) => ({
                ...state,
                cryptoInfo: result,
                spinner: false
            }))
        }
    }))
)


async function getCryptos() {
    try {
        const url = "https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD";
        const { data: { Data } } = await axios(url);
        const result = SchemaCryptoSelect.safeParse(Data)
        if (result.success) {
            return result.data
        }
    } catch (error) {
        console.log(error)
    }
}

async function getCryptoInfo(selectForm: SelectForm) {

    try {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${selectForm.cryptoCurrency}&tsyms=${selectForm.currency}`;
        const { data: { DISPLAY } } = await axios(url);
        const result = SchemaCryptoInfo.safeParse(DISPLAY[selectForm.cryptoCurrency][selectForm.currency]);
        if (result.success) {
            return result.data
        }
    } catch (error) {
        console.log(error)
    }
}