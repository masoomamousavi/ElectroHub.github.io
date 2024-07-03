import { AppContext } from "@/pages/_app";
import Link from "next/link";
import { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import MobileSubMenu from "./MobileSubMenu";
function OffConvas() {
    const { menuStatus, setMenuStatus } = useContext(AppContext);
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };
    return (
        <aside className={menuStatus == "open" ? "bg-sky-200 fixed px-5 h-screen sm:w-60 w-52 shadow-md z-10 top-0 left-0 overflow-x-hidden" : "hidden"} style={{ transition: '0.5s' }
        }>
            <div className="flex justify-between items-center  pt-5 pb-2">
                <h1 className="text-md text-center font-bold text-slate-700">ElectroHub</h1>
                <MdClose size='20px' className="cursor-pointer text-gray-800"
                    onClick={() => setMenuStatus('close')} />
            </div>

            <ul className="py-3 sm:py-0">
                <li className="text-sm md:text-base py-2">
                    <div className="flex justify-between items-center">
                        <Link href='/products/laptops' className="text-gray-800">Laptop</Link>
                        <RiArrowDownSLine size='16px' className="mt-1 cursor-pointer text-gray-800" onClick={toggleSubMenu} />
                    </div>
                    {subMenuOpen && <MobileSubMenu />}
                </li>
                <li className="flex justify-between items-center text-sm md:text-base py-2">
                    <Link href='/products/mobiles' className="text-gray-800">Mobiles</Link>
                    <RiArrowDownSLine size='16px' className="mt-1 text-gray-800" />
                </li>
                <li className="flex justify-between items-center text-sm md:text-base  py-2">
                    <Link href='/products/tablets' className="text-gray-800">Tablets</Link>
                    <RiArrowDownSLine size='16px' className="mt-1 text-gray-800" />
                </li>
                <li className="flex justify-between items-center text-sm md:text-base  py-2">
                    <Link href='/products/cameras' className="text-gray-800">Cameras</Link>
                    <RiArrowDownSLine size='16px' className="mt-1 text-gray-800" />
                </li>
                <li className="flex justify-between items-center text-sm md:text-base  py-2">
                    <Link href='/products/consoles' className="text-gray-800">Game Consoles</Link>
                    <RiArrowDownSLine size='16px' className="mt-1 text-gray-800" />
                </li>
            </ul>
        </aside >
    )
}
export default OffConvas;