interface LogoProps {
    url: string
}

import Link from "next/link";

export default function Logo(props: LogoProps) {
    return (
        <Link 
            href={props.url}
            className="flex justify-center items-center h-23 px-5
                font-black text-center cursor-pointer">
                    <span className="text-3xl">LOGO</span>
        </Link>
    )
}