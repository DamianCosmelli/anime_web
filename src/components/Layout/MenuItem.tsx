import { JSX } from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
    icon: JSX.Element;
    title: string;
    route: string;
}

export const MenuItem = ({icon, title, route }: MenuItemProps) => {
    return (
        <>        
        <Link to={route} className="text-white hover:text-gray-800 flex justify-center text-center m-2 gap-1" >
        {icon}
        {title}
        </Link>
        </>

    );
}