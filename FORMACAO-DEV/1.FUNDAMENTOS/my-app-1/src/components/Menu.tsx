import MenuItem from "./MenuItem";
import { Home, Home2, ShoppingCart, UserCheck } from 'tabler-icons-react';

export default function Menu() {
    return (
        <div className={`
            flex flex-col gap-2 p-2 
        `}>
            <MenuItem menu_item="Home" url="/" icone={<Home2 size={20}/>}  />
            <MenuItem menu_item="Produtos" url="/produtos" icone={<ShoppingCart size={20}/>} />
            <MenuItem menu_item="Clientes" url="/clientes" icone={<UserCheck size={20}/>} />
        </div>
    )
}