type CryptoInfoIteamProps = {
    label: string
    data: string
}

export default function CryptoInfoIteam({ label, data }: CryptoInfoIteamProps) {
    return (
        <p className="text-sm md:text-lg text-gray-900 font-normal">{label}: <span className="font-extrabold">{data}</span></p>
    )
}
