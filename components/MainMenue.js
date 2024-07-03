import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import SubMenue from "./SubMenue";
import { useState } from "react";

function MainMenue() {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const handleMouseEnter = () => {
        setShowSubMenu(true);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setShowSubMenu(false);
        }, 1000);
    };

    return (
        <div className="bg-sky-600 border hidden md:block border-slate-200">
            <div className="md:container mx-2 md:mx-auto">
                <ul className="flex items-center py-5 md:space-x-6 space-x-3 sm:space-x-4 text-xs sm:text-sm md:text-base text-white ">
                    <li
                        className=" flex items-center gap-0 sm:gap-1 text-slate-800 hover:text-black"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link href='/products/laptops'>Laptop</Link>
                        <RiArrowDownSLine size='16px' className="mt-1 text-slate-800" />
                        {showSubMenu && <SubMenue onMouseEnter={handleMouseEnter} />}
                    </li>
                    <li className="flex items-center gap-0 sm:gap-1 text-slate-800 hover:text-black">
                        <Link href='/products/mobiles'>Mobile</Link>
                        <RiArrowDownSLine size='16px' className="mt-1 text-slate-800" />
                    </li>
                    <li className="flex items-center gap-0 sm:gap-1 text-slate-800 hover:text-black">
                        <Link href='/products/tablets'>Tablets</Link>
                        <RiArrowDownSLine size='16px' className="mt-1 text-slate-800" />
                    </li>
                    <li className="flex items-center gap-0 sm:gap-1 text-slate-800 hover:text-black">
                        <Link href='/products/cameras'>Camera</Link>
                        <RiArrowDownSLine size='16px' className="mt-1 text-slate-800" />
                    </li>
                    <li className="flex items-center gap-0 sm:gap-1 text-slate-800 hover:text-black">
                        <Link href='/products/consoles'>Game Console</Link>
                        <RiArrowDownSLine size='16px' className="mt-1 text-slate-800" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainMenue;
