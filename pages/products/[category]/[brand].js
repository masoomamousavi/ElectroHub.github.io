import { useRouter } from "next/router";
import db from '@/data/db.json';
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

function Brand() {
    const router = useRouter();
    const { brand } = router.query;
    const [laptops, setLaptops] = useState([]);
    useEffect(() => {
        if (brand) {
            setLaptops(getLaptops(brand));
        } else {
            <div className="container my-6">
                <h1 className="text-2xl text-cneter text-sky-900">We Could Not find Your desired Brand!</h1>
            </div>
        }
    }, [brand]);

    const getLaptops = (brand) => {
        return db.laptops.filter((laptop) => laptop.brand.toLowerCase() === brand.toLowerCase());
    }

    return (
        <div className="container mx-auto my-5">
            <div className="mx-3 md:mx-0">
                <h1 className="font-semibold text-2xl mt-10 mb-5 text-slate-800 font-sans">{brand && `(${brand.toUpperCase()}) Laptops`}</h1>
                <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {
                        laptops.map((laptop) => (
                            <div key={laptop.id}>
                                <ProductCard {...laptop} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Brand;
