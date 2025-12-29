interface ConteudoProps {
    children: any
}

export default function Conteudo(props: any) {
    return (
        <div className={`
            flex justify-center items-center flex-1 
            bg-zinc-900
        `}>
            <div>
                {props.children}
            </div>
        </div>
    )
}