export default function Conteudo(props: any) {
    return (
        <div className={`
            flex justify-center items-center flex-1 
            bg-emerald-500 rounded-lg
        `}>
            <div>
                {props.children}
            </div>
        </div>
    )
}