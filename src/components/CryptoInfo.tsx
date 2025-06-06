import { useCryptoStore } from "../store/store"
import CryptoInfoIteam from "./CryptoInfoIteam";

export default function CryptoInfo() {
    const { cryptoInfo } = useCryptoStore();
    return (
        <div className="glass p-5">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">Cotizacion Actual</h2>

            <div className="flex flex-col md:flex-row justify-center items-center my-5">
                    <img className="md:mx-5" src={`https://cryptocompare.com${cryptoInfo.IMAGEURL}`} alt="Logo-Cripto-Moneda" />

                <div className="flex flex-col justify-center items-stretch space-y-2">
                    <CryptoInfoIteam label="Precio Actual" data={cryptoInfo.PRICE}/>
                    <CryptoInfoIteam label="Maximo del Dia" data={cryptoInfo.HIGHDAY}/>
                    <CryptoInfoIteam label="Minimo del Dia" data={cryptoInfo.LOWDAY}/>
                    <CryptoInfoIteam label="Cambio Ultimas 24Hrs" data={cryptoInfo.CHANGE24HOUR}/>
                    <CryptoInfoIteam label="Ultima Actualizacion" data={cryptoInfo.LASTUPDATE}/>
                </div>
            </div>
        </div>
    )
}
