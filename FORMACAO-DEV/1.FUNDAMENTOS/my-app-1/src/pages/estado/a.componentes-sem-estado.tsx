import Modelo from '../../components/Modelo';

export default function ComponentesSemEstado() {
    let numero = 0;
    function incrementar() {
        numero++;
        console.log(numero);
    }
    
    return (
        <Modelo cabecalho_titulo="Componentes sem Estado">
            <div className='flex flex-col'>
                <h2>Componentes sem Estado</h2>
                <div className='flex'>
                    <span>Valor:</span><span>{numero}</span>
                </div>
                <button 
                    onClick={incrementar}
                    className='bg-cyan-600 cursor-pointer w-fit p-2 outline-0'
                >
                    Ação sem Estado gerenciado não altera a interface (apenas no console)
                </button>
            </div>

        </Modelo>
    )
}