import '../app/globals.css';
import Modelo from '@/components/Modelo';

export default function Clientes() {
    return (
        <Modelo
            cabecalho_titulo="Clientes de Ouro"
        >
            <h1>Clientes</h1>
            <p>Conheça nossos Produtos e se torne nosso Cliente</p>
            <button>Depoimentos inspiradores</button>
        </Modelo>
        
        // <div className='flex flex-col gap-5 p-5'>
        //     <Cabecalho 
        //         cabecalho_titulo="Minha novas Página"
        //         cabecalho_subtitulo="Página criada na pasta PAGES"
        //     />
        //     <Conteudo />
        //     <Rodape 
        //         rodape_texto_esquerda="Feito com Amor"
        //         rodape_texto_direita="Flavio Ribeiro"
        //     />
        // </div>
    )
}