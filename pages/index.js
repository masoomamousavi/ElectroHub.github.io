import ProductCard from "@/components/ProductCard";
import db from "../data/db.json";

export default function Home() {
  return (
    <div className="container mx-auto px-3 md:px-0">
      <h1 className="font-semibold text-2xl mt-10 mb-5 font-sans text-slate-800">Laptops</h1>
      <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
          db.laptops.slice(0, 4).map((laptop) => (
            <div key={laptop.id}>
              <ProductCard {...laptop} />
            </div>
          ))
        }
      </div>
      <h1 className="font-semibold text-2xl mt-10 mb-5 font-sans text-slate-800">Mobiles</h1>
      <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
          db.mobiles.slice(0, 4).map((mobile) => (
            <div key={mobile.id}>
              <ProductCard {...mobile} />
            </div>
          ))
        }
      </div>
      <h1 className="font-semibold text-2xl mt-10 mb-5 font-sans text-slate-800">Cameras</h1>
      <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
          db.cameras.slice(0, 4).map((camera) => (
            <div key={camera.id}>
              <ProductCard {...camera} />
            </div>
          ))
        }
      </div>
      <h1 className="font-semibold text-2xl mt-10 mb-5 font-sans text-slate-800">Tablets</h1>
      <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
          db.tablets.slice(0, 4).map((tablet) => (
            <div key={tablet.id}>
              <ProductCard {...tablet} />
            </div>
          ))
        }
      </div>
      <h1 className="font-semibold text-2xl mt-10 mb-5 font-sans text-slate-800">Game Consoles</h1>
      <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
          db.consoles.slice(0, 4).map((console) => (
            <div key={console.id}>
              <ProductCard {...console} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

