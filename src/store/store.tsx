import axios from "axios";
import { create } from "zustand";
import { SchemaCryptoSelect } from "../schemas/schemas";
import type { CryptoSelect } from "../types/types";
import { devtools } from "zustand/middleware";


type CryptoStoreTypes = {
    fetchCryptos: () => void
    cryptosSelect: CryptoSelect
}

export const useCryptoStore = create<CryptoStoreTypes>()(
    devtools((set) => ({
    cryptosSelect:  [],
    fetchCryptos: async () => {
        const result = await getCryptos();
        set((set) => ({
            ...set,
            cryptosSelect: result
            
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