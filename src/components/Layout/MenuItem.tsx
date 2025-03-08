import { Link } from "react-router-dom";

interface MenuItemProps {
    title: string;
    route: string;
}

export function MenuItem({ title, route }: MenuItemProps) {
    return (
        <li><Link to={route} className="text-white hover:text-gray-400 m-5">{title
        }</Link></li>
    );
}