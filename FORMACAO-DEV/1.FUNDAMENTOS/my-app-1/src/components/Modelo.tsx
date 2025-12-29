import '@/app/globals.css';
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";
import AreaLateral from './AreaLateral';

interface PageDefaultProps {
    cabecalho_titulo: string
    children: any
}

export default function PageDefault(props: PageDefaultProps) {
    return (
        <div>
            <div className={`flex`}>
                <AreaLateral />
                <div className="flex flex-col h-screen w-screen">
                    <Cabecalho
                        className={`h-30 py-5
                            bg-linear-to-r bg-zinc-800 border-zinc-700 border-b-8
                        `}
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