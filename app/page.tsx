import BannerSlider from "./(components)/BannerSlider/bannerslider";
import Button from "./(components)/Button/Button";
import InfoSection from "./(components)/infosection/infosection";
import CartItem from "./(components)/productcard/cartitems";
import ProductCard from "./(components)/productcard/productcard";

export default function Page() {
  const banners = [
    {
      src: "/Banner1.jpeg",
      alt: "Banner 1",
      heading: "Welcome to Heet Iqos Store",
      paragraph: "Find the best Flavours here here.",
    },
    {
      src: "/Banner2.jpeg",
      alt: "Banner 2",
      heading: "IQOS Collection 2025",
      paragraph: "Explore the new trends.",
    },
    {
      src: "/Banner3.png",
      alt: "Banner 3",
      heading: "Limited Time Offer",
      paragraph: "Hurry up before it ends!",
    },
  ];

  return (
    <div className="px-2 sm:px-6  py-6">
      <BannerSlider banners={banners} interval={4000} sliderHeight="h-[600px]" />
      <div>
        {/* this is a info section or title of the Kazakhastan  */}
        <InfoSection heading1="IQOS TEREA Kazakhstan"
          heading2="Top Selling Flavours"
          paragraphs={[
            { text: "Discover TEREA, exclusively for IQOS ILUMA. its ingenious SMARTCORE INDUCTION SYSTEM brings you improved draw, taste consistency from stick to stick", color: "text-gray-600" },
            { text: "IQOS ILUMA is designed to be used only with TEREA STICKS. DON'T use IQOS ILUMA and TEREA sticks with previous IQOS generation", color: "text-gray-600" },
            { text: "All Flavours of IQOS TEREA Kazakhstan are available at a 40% discount", color: "text-red-600" },
          ]} />
      </div>

      <div>
        {/* Kazakhstan Products */}
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

            <div className="flex justify-center mt-8">
              <Button
                text="View More Flavours"
                href="/IqosKazakhstan"
                className="bg-red-400 p-4 pl-6 pr-6 rounded-lg text-lg text-white hover:bg-red-600 hover:scale-110 transition duration-300"
              />
            </div>
          </div>
        </div>
        {/* Indonesia Products */}
        <div>
          <div className="max-w-screen-xl mx-auto text-white pt-4 shadow-md rounded-lg mb-2">
            <InfoSection
              heading1="IQOS TEREA FROM INDONESIA"
              heading2="IQOS Top selling from Indonesia"
            />
          </div>

          <div className="min-h-screen bg-teal-100 px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 px-4 max-w-[1300px] mx-auto">
              <ProductCard
                slug="iqos-terea-apricity-indonesia"
                image="/indonesia/apricity-indonesia.webp"
                brand="IQOS Indonesia"
                flavour="TEREA Apricity"
                flavourStyle="italic text-blue-500"
                price={130}
                cutPrice={220}
                basePath="/products"
                discount={40}
              />
              <ProductCard
                slug="iqos-terea-yugen-indonesia"
                image="/indonesia/yugen-indonesia.webp"
                brand="IQOS Indonesia"
                flavour="TEREA Yugen"
                flavourStyle="italic text-blue-500"
                price={130}
                cutPrice={220}
                basePath="/products"
                discount={40}
              />
              <ProductCard
                slug="iqos-terea-sienna-indonesia"
                image="/indonesia/sienna.webp"
                brand="IQOS Indonesia"
                flavour="TEREA Sienna"
                flavourStyle="italic text-blue-500"
                price={130}
                cutPrice={220}
                basePath="/products"
                discount={40}
              />
              <ProductCard
                slug="iqos-terea-blue-indonesia"
                image="/indonesia/Terea-Blue.jpg"
                brand="IQOS Indonesia"
                flavour="TEREA Blue"
                flavourStyle="italic text-blue-500"
                price={130}
                cutPrice={220}
                basePath="/products"
                discount={40}
              />
            </div>

            {/* Centered last two Indonesian cards */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6 px-4">
              <div className="w-full sm:w-[300px] lg:w-[270px]">
                <ProductCard
                  slug="iqos-terea-purple-indonesia-1"
                  image="/indonesia/image.jpg"
                  brand="IQOS Indonesia"
                  flavour="TEREA Purple"
                  flavourStyle="italic text-blue-500"
                  price={130}
                  cutPrice={220}
                  basePath="/products"
                  discount={40}
                />
              </div>
              <div className="w-full sm:w-[300px] lg:w-[270px]">
                <ProductCard
                  slug="iqos-terea-purple-indonesia-2"
                  image="/indonesia/green.jpeg"
                  brand="IQOS Indonesia"
                  flavour="TEREA Purple"
                  flavourStyle="italic text-blue-500"
                  price={130}
                  cutPrice={220}
                  basePath="/products"
                  discount={40}
                />
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Button
                text="View More Flavours"
                href="/IqosHeetclassic"
                className="bg-red-300 p-4 pl-6 pr-6 rounded-lg text-lg text-white hover:bg-red-600 hover:scale-110 transition duration-300"
              />
            </div>
          </div>
        </div>


      </div>
      <div>
        {/* 
      <ProductCard
        slug="banana-ice"
        image="/images/banana-ice.jpg"
        brand="CoolBrand"
        flavour="Banana Ice"
        flavourStyle="italic text-blue-500"
        price={25}
        cutPrice={35}
        basePath="/products"
        discount={p} // 👈 this shows "29% OFF"
      /> */}
      </div>

    </div>
  );
}
