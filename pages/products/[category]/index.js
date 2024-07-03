import { useRouter } from 'next/router';
import db from '@/data/db.json';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import Pagination from '@/components/Pagination';

function Category() {
    const router = useRouter();
    const { category } = router.query;
    const [products, setProducts] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (category && db[category]) {
            const filteredProducts = db[category];
            setProducts(filteredProducts);
            setTotalPages(Math.ceil(filteredProducts.length / PAGE_SIZE));
            setCurrentPage(1);
        }
    }, [category]);

    useEffect(() => {
        if (searchKey && category && db[category]) {
            const lowerCaseSearchKey = searchKey.toLowerCase();
            const searchProducts = db[category].filter(product =>
                product.description.toLowerCase().includes(lowerCaseSearchKey)
            );
            setProducts(searchProducts);
            setTotalPages(Math.ceil(searchProducts.length / PAGE_SIZE));
            setCurrentPage(1);
        } else if (category && db[category]) {
            setProducts(db[category]);
            setTotalPages(Math.ceil(db[category].length / PAGE_SIZE));
            setCurrentPage(1);
        }
    }, [searchKey, category]);

    const PAGE_SIZE = 8;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const paginatedProducts = products.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    if (!category || !db[category]) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center mt-5 my-6">
                <input
                    type="text"
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                    placeholder="What you are looking for?"
                    className="md:p-2 p-1 md:px-5 px-3 border-2 border-slate-400 outline-none bg-slate-100 rounded-md text-black w-auto"
                />
            </div>
            <div className="my-6 px-2">
                <h1 className="font-sans font-semibold text-2xl my-4 text-slate-800">Products ({category})</h1>
                <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {paginatedProducts.map((product) => (
                        <div key={product.id}>
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </div>
    );
}

export default Category;
