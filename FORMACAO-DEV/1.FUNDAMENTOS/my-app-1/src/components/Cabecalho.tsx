export default function Cabecalho(props: any) {
    return (
        <div className={`
            flex flex-col justify-center items-center gap-2
            bg-purple-500 h-36 rounded-lg
        `}>
            <h1 className="text-3xl">{props.cabecalho_titulo}</h1>
            <h3>{props.cabecalho_subtitulo}</h3>
        </div>
    )
}