import { useState } from 'react';
import Modelo from '../../components/Modelo';

export default function ComponentesComEstado() {
    const [num, setNumero] = useState(0);
    function setNum() {
        setNumero(num+1);
    }
    
    return (
        <Modelo cabecalho_titulo="Componente com Estado">
            <div>Número: <span>{num}</span></div>
            <button 
                onClick={setNum}
                className='bg-orange-700 p-3 rounded-lg cursor-pointer'>
                    Atualizar Número
            </button>
        </Modelo>
    )
}