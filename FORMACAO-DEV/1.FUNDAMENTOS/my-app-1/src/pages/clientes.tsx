import '../app/globals.css';
import Modelo from '@/components/Modelo';

export default function Clientes() {
    function executarEvento() {
        console.log('Clicou no botão');
    }

    return (
        <Modelo
            cabecalho_titulo="Clientes de Ouro"
        >
            <h1>Clientes</h1>
            <p>Conheça nossos Produtos e se torne nosso Cliente</p>
            <button 
                onClick={executarEvento}
                className={`
                    p-3 rounded-lg cursor-pointer
                    bg-red-700
                `}>
                    Clique para exibir uma mensagem no Console 
            </button>
        </Modelo>
    )
}