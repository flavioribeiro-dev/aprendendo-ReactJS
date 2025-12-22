export default function Cabecalho(props: any) {
    return (
        <div className={`
            flex flex-col justify-center items-center gap-2
            bg-purple-500 rounded-lg
            ${props.className ?? ''}
        `}>
            <h1 className="text-3xl">{props.cabecalho_titulo}</h1>
            <h3>O melhor App da web</h3>
        </div>
    )
}