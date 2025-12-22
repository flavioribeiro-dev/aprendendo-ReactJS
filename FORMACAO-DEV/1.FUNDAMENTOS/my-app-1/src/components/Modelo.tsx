import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";
import Menu from './Menu';


export default function PageDefault(props: any) {
    return (
        <div className="flex flex-col gap-4 h-screen">
            <Cabecalho
                cabecalho_titulo={props.cabecalho_titulo}
            />
            <div className="flex gap-4 h-screen">
                <Menu />
                <Conteudo>
                    <div>{props.children}</div>
                </Conteudo>
            </div>
            
            <Rodape />
        </div>
    )
}