import Link from "next/link";

export default function MenuItem(props: any) {
    return (
        <Link href={props.url}
            className={`
            px-3 py-2 rounded-lg hover:bg-zinc-800
            bg-zinc-700 cursor-pointer text-start
        `}
            >{props.menu_item}
        </Link>
    )
}