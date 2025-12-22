export default function Rodape(props: any) {
    return (
        <div className={`
            flex justify-around items-center h-36 text-xl
            bg-cyan-600 rounded-lg
        `}>
            <div>{props.rodape_texto_esquerda}</div>
            <div>{props.rodape_texto_direita}</div>
        </div>
    )
}