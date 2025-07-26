import ProductCard from "../(components)/productcard/productcard";


export default function page() {
  return (
    <div>
         <div className="bg-gray-200 ml-5 mr-5 rounded-lg">
          <div className="bg-gray-100 px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 px-4 max-w-[1300px] mx-auto">
              <ProductCard
                slug="iqos-terea-silver-kazakhstan"
                image="/silver1.png"
                brand="IQOS TEREA Kazakhstan"
                flavour="Silver"
                flavourStyle="italic text-blue-500"
                price={130}
                cutPrice={220}
                basePath="/products"
                discount={40}
              />
              <ProductCard
                slug="iqos-terea-amber-kazakhstan"
                image="/amber1.webp"
                brand="IQOS TEREA Kazakhstan"
                flavour="Amber"
                flavourStyle="italic text-blue-500"
                price={130}
                cutPrice={220}
                basePath="/products"
                discount={40}
              />
              <ProductCard
                slug="iqos-terea-bronze-kazakhstan"
                image="/Bronze1.webp"
                brand="IQOS TEREA Kazakhstan"
                flavour="Bronze"
                flavourStyle="italic text-blue-500"
                price={130}
                cutPrice={220}
                basePath="/products"
                discount={40}
              />
              <ProductCard
                slug="iqos-terea-purple-kazakhstan"
                image="/purple2.jpeg"
                brand="IQOS TEREA Kazakhstan"
                flavour="Purple"
                flavourStyle="italic text-blue-500"
                price={130}
                cutPrice={220}
                basePath="/products"
                discount={40}
              />
            </div>

            
          </div>
        </div>
    </div>
  )
}
