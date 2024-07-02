import { AppContext } from "@/pages/_app";
import Link from "next/link";
import { useContext } from "react";
import { GrMenu } from "react-icons/gr";
function Navbar() {
    const { setMenuStatus } = useContext(AppContext);
    return (
        <div className="md:bg-white bg-sky-600 border border-slate-200">
            <div className="container max-w-6xl mx-auto">
                <ul className="flex items-center py-5 sm:space-x-8 md:space-x-10 space-x-4 text-sm sm:text-base">
                    <li className="inline-block ml-5 md:hidden">
                        <GrMenu size='23px'
                            onClick={() => setMenuStatus('open')}
                            className="text-white pt-1" />
                    </li>
                    <li>
                        <Link className="md:text-sky-600 text-white hover:border-b sm:font-semibold font-normal hover:border-white md:hover:border-sky-400 md:hover:text-sky-400 hover:pb-1" href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="md:text-sky-600  text-white hover:border-b sm:font-semibold font-normal hover:border-white md:hover:border-sky-400 md:hover:text-sky-400 hover:pb-1" href='/about'>About</Link>
                    </li>
                    <li>
                        <Link className="md:text-sky-600 text-white hover:border-b sm:font-semibold hover:border-white md:hover:border-sky-400 md:hover:text-sky-400 hover:pb-1 font-normal" href='/articles'>Articles</Link>
                    </li>
                    <li>
                        <Link className="md:text-sky-600 font-normal text-white hover:border-b sm:font-semibold hover:border-white md:hover:border-sky-400 md:hover:text-sky-400 hover:pb-1" href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;