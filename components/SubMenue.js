import Link from 'next/link';

function SubMenue({ onMouseEnter }) {

    return (
        <div
            className="bg-white  absolute hidden md:flex left-0 right-0 shadow-md"
            style={{ top: '120px' }}
            onMouseEnter={onMouseEnter}
        >
            <div className="container mx-auto ">
                <ul className="flex items-center py-5 sm:space-x-6 space-x-4 text-sm sm:text-base text-gray-600">
                    <li className="flex items-center hover:text-sky-500">
                        <Link className="text-xs" href='/products/laptop/hp'>HP</Link>
                    </li>
                    <li className="flex items-center hover:text-sky-500">
                        <Link className="text-xs" href='/products/laptop/dell'>Dell</Link>
                    </li>
                    <li className="flex items-center hover:text-sky-500">
                        <Link className="text-xs" href='/products/laptop/lenovo'>Lenovo</Link>
                    </li>
                    <li className="flex items-center hover:text-sky-500">
                        <Link className="text-xs" href='/products/laptop/asus'>ASUS</Link>
                    </li>
                    <li className="flex items-center hover:text-sky-500">
                        <Link className="text-xs" href='/products/laptop/microsoft'>Microsoft</Link>
                    </li>
                    <li className="flex items-center hover:text-sky-500">
                        <Link className="text-xs" href='/products/laptop/apple'>Apple</Link>
                    </li>
                    <li className="flex items-center hover:text-sky-500">
                        <Link className="text-xs" href='/products/laptop/acer'>Acer</Link>
                    </li>
                    <li className="flex items-center hover:text-sky-500">
                        <Link className="text-xs" href='/products/laptop/samsung'>Samsung</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SubMenue;
