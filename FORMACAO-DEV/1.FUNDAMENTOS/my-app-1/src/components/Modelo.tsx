import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

export default function PageDefault(props: any) {
    return (
        <div className="flex flex-col gap-4 h-screen">
            <Cabecalho 
                cabecalho_titulo={props.cabecalho_titulo}
                cabecalho_subtitulo={props.cabecalho_subtitulo}
            />
            <Conteudo>
                <div>{props.children}</div>
            </Conteudo>
            <Rodape 
                rodape_texto_esquerda={props.rodape_texto_esquerda}
                rodape_texto_direita={props.rodape_texto_direita}
            />
        </div>
    )
}