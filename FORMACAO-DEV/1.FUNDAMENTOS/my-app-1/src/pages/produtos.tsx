import '@/app/globals.css';
import Cabecalho from '@/components/Cabecalho';
import Conteudo from '@/components/Conteudo';
import Rodape from '@/components/Rodape';

export default function Produtos() {
    return (
        <div>
            <Cabecalho 
                cabecalho_titulo="Nossos Produtos"
                cabecalho_subtitulo="Os melhores produtos você encontra aqui"
            />
            <Conteudo>
                <h1>Os melhores produtos do mundo:</h1>
                <ul className='list-disc pl-10'>
                    <li>Café</li>
                    <li>Teclado</li>
                    <li>Mouse</li>
                    <li>Código</li>
                </ul>
            </Conteudo>
            <Rodape 
                rodape_texto_esquerda="Agora vai"
                rodape_texto_direita="Vamo que vamo"
            />
        </div>
    )
}