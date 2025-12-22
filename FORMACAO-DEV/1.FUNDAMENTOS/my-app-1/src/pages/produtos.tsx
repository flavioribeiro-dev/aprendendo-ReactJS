import '@/app/globals.css';
import Modelo from '@/components/Modelo';


export default function Produtos() {
    return (
        <Modelo 
            cabecalho_titulo="Página de Produtos"
            cabecalho_subtitulo="Os melhores produtos você encontra aqui"
            rodape_texto_esquerda="Feito com Amor"
            rodape_texto_direita="Vamo que vamooo"
        >
            <h1>Lista de Produtos</h1>
            <ul className='list-disc pl-8'>
                <li>Café</li>
                <li>Mouse</li>
                <li>Teclado</li>
                <li>Código</li>
            </ul>
        </Modelo>
    )
}