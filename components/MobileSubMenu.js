
import { AppContext } from '@/pages/_app';
import Link from 'next/link';
import { useContext } from 'react';
function MobileSubMenu() {
    return (
        <div>
            <ul className=" pt-5 pb-1 space-y-2 text-sm sm:text-base text-gray-600">
                <li className=" hover:text-sky-500">
                    <Link className="text-xs" href='/products/laptop/hp'>HP</Link>
                </li>
                <li className=" hover:text-sky-500">
                    <Link className="text-xs" href='/products/laptop/dell'>Dell</Link>
                </li>
                <li className=" hover:text-sky-500">
                    <Link className="text-xs" href='/products/laptop/lenovo'>Lenovo</Link>
                </li>
                <li className=" hover:text-sky-500">
                    <Link className="text-xs" href='/products/laptop/asus'>ASUS</Link>
                </li>
                <li className=" hover:text-sky-500">
                    <Link className="text-xs" href='/products/laptop/microsoft'>Microsoft</Link>
                </li>
                <li className=" hover:text-sky-500">
                    <Link className="text-xs" href='/products/laptop/apple'>Apple</Link>
                </li>
                <li className=" hover:text-sky-500">
                    <Link className="text-xs" href='/products/laptop/acer'>Acer</Link>
                </li>
                <li className=" hover:text-sky-500">
                    <Link className="text-xs" href='/products/laptop/samsung'>Samsung</Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileSubMenu;