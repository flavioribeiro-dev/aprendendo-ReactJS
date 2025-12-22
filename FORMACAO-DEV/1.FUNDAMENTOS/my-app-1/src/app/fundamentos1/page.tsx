import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";

export default function Page() {
    return (
        <div className={`
            flex flex-col gap-4 p-4
            h-screen
        `}>
            <Cabecalho 
                cabecalho_titulo="Minha Aplicação"
                cabecalho_subtitulo="O melhor App da web..."
            />
            <Conteudo />
            <Rodape />
        </div>
    )
}