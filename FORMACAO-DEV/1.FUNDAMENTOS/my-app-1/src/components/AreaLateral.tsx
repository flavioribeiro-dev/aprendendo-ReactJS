import Logo from "./Logo";
import Menu from "./Menu";

export default function AreaLateral() {
    return (
        <div className="flex flex-col min-w-fit px-0.5">
            <Logo url={"/"} />
            <Menu />
        </div>
    )
}