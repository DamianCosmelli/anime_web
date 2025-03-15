import { Link } from "react-router-dom";

interface MenuItemProps {
    title: string;
    route: string;
}

export function MenuItem({ title, route }: MenuItemProps) {
    return (
        <Link to={route} className="text-white hover:text-amber-900 flex justify-center text-center m-1" >{title
        }</Link>
    );
}