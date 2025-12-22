import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div className={`
            flex flex-col gap-2 p-2 
            bg-zinc-600 rounded-lg
        `}>
            <MenuItem menu_item="Home" url="/" />
            <MenuItem menu_item="Produtos" url="/produtos" />
            <MenuItem menu_item="Clientes" url="/clientes" />
        </div>
    )
}