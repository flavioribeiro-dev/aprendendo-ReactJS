import { CircleDashed, Minus, Plus } from 'tabler-icons-react';
import { useState } from 'react';
import Modelo from '../../components/Modelo';

export default function DesafioContador() {
    let [num, setNum] = useState(0);

    function increment() {
        setNum(num+1);
    }
    function decrement() {
        setNum(num-1);
    }

    return (
        <Modelo cabecalho_titulo='Desafio: CONTADOR'>
            <div className='flex flex-col'>
                <h2>Criando um Contador com ações de Incremento ou Decremento</h2>
                <div>Número: <span>{num}</span></div>
                <div className='flex gap-3'>
                    <button 
                        onClick={increment}
                        className='flex bg-green-800 p-2 rounded-lg cursor-pointer'>
                            Adicione {<Plus/>}
                    </button>
                    <button 
                        onClick={decrement}
                        className='flex bg-orange-400 p-2 rounded-lg cursor-pointer text-black'>
                            Subtraia {<Minus />}
                    </button>
                </div>
            </div>
            
        </Modelo>
    )
}