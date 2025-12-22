import '../app/globals.css';
import Conteudo from '@/components/Conteudo';
import Cabecalho from "@/components/Cabecalho";
import Rodape from '@/components/Rodape';

export default function Clientes() {
    return (
        <div className='flex flex-col gap-5 p-5'>
            <Cabecalho 
                cabecalho_titulo="Minha novas Página"
                cabecalho_subtitulo="Página criada na pasta PAGES"
            />
            <Conteudo />
            <Rodape 
                rodape_texto_esquerda="Feito com Amor"
                rodape_texto_direita="Flavio Ribeiro"
            />
        </div>
    )
}