type CryptoInfoIteamProps = {
    label: string
    data: string
}

export default function CryptoInfoIteam({ label, data }: CryptoInfoIteamProps) {
    return (
        <p className="text-gray-900 font-normal md:text-lg">{label}: <span className="font-extrabold">{data}</span></p>
    )
}
