import MenuItem from "./MenuItem";
import { Container, Home, Home2, ShoppingCart, UserCheck } from 'tabler-icons-react';

export default function Menu() {
    return (
        <div className={`
            flex flex-col gap-2 px-2
        `}>
            <hr className="border-zinc-800 border-2 my-1 mb-2"></hr>
            <span className="text-zinc-500 text-center text-sm mx-3 px-5 py-1 bg-zinc-900">estados</span>
            <MenuItem menu_item="Componentes sem Estado" url="/estado/a.componentes-sem-estado" icone={<Container size={20}/>}  />
            <MenuItem menu_item="Componentes com Estado" url="/estado/b.componentes-com-estado" icone={<Container size={20}/>}  />
            <MenuItem menu_item="Desafio - Contador" url="/estado/desafio-CONTADOR" icone={<Container size={20}/>}  />
            <hr className="border-zinc-800 border-2 my-1 mb-2"></hr>
            {/* ------------------------------------------------------------- */}
            <span className="text-zinc-500 text-center text-sm px-5 py-1 bg-zinc-900">componentes react</span>
            <MenuItem menu_item="Home" url="/" icone={<Home2 size={20}/>}  />
            <MenuItem menu_item="Produtos" url="/produtos" icone={<ShoppingCart size={20}/>} />
            <MenuItem menu_item="Clientes" url="/clientes" icone={<UserCheck size={20}/>} />
            <hr className="border-zinc-800 border-2 my-1 mb-2"></hr>
        </div>
    )
}