import Link from "next/link";

interface MenuItemProps {
    menu_item: string,
    url: string,
    icone: any
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url}
            className={`
                px-3 py-1 rounded-lg hover:bg-zinc-800 
                cursor-pointer text-center text-zinc-350
        `}>
            <div className="flex gap-2 text-sm">{props.icone}{props.menu_item}</div>
        </Link>
    )
}