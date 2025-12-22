import '@/app/globals.css';
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";
import Menu from './Menu';

export default function PageDefault(props: any) {
    return (
        <div>
            <div className={`flex gap-4`}>
                <Menu />
                <div className="flex flex-col gap-4 h-screen w-screen">
                    <Cabecalho
                        cabecalho_titulo={props.cabecalho_titulo}
                    />
                    <div className="flex gap-4 h-screen">
                        
                        <Conteudo>
                            <div>{props.children}</div>
                        </Conteudo>
                    </div>
                    
                    <Rodape />
                </div>
            </div>
        </div>
        
    
    )
}