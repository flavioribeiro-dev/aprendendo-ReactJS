import Logo from "./Logo";
import Menu from "./Menu";

export default function AreaLateral() {
    return (
        <div className="flex flex-col">
            <Logo url={"/"} />
            <Menu />
        </div>
    )
}