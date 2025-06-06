import axios from "axios";
import { create } from "zustand";
import { SchemaCryptoInfo, SchemaCryptoSelect } from "../schemas/schemas";
import type { CryptoSelect, SelectForm } from "../types/types";
import { devtools } from "zustand/middleware";


type CryptoStoreTypes = {
    fetchCryptos: () => void
    cryptosSelect: CryptoSelect
    fetchCryptoInfo: (selectForm: SelectForm) => void
}

export const useCryptoStore = create<CryptoStoreTypes>()(
    devtools((set) => ({
        cryptosSelect: [],
        fetchCryptos: async () => {
            const result = await getCryptos();
            set((set) => ({
                ...set,
                cryptosSelect: result

            }))
        },

        fetchCryptoInfo: (selectForm: SelectForm) => {
            getCryptoInfo(selectForm)
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
            console.log(result.data);
        }
    } catch (error) {
        console.log(error)
    }
}