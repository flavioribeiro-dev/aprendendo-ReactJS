interface CabecalhoProps {
    cabecalho_titulo: string
    className: string
}

export default function Cabecalho(props: CabecalhoProps) {
    return (
        <div className={`
            flex flex-col justify-center items-center
            
            ${props.className ?? ''}
        `}>
            <h1 className="text-2xl">{props.cabecalho_titulo}</h1>
            <h3 className="text-sm">O melhor App da web</h3>
        </div>
    )
}