import '@/app/globals.css';
import Modelo from '@/components/Modelo';


export default function Produtos() {
    return (
        <Modelo 
            cabecalho_titulo="Página de Produtos"
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