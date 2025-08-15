import BannerSlider from "../(components)/BannerSlider/bannerslider";
import ProductCard from "../(components)/productcard/productcard";

export default function Page() {
    const banners = [
        {
            src: "/Banner1.jpeg",
            alt: "Banner 1",
            heading: "Buy IQOS Terea INDONESIAN & UAE ",
            paragraph:
                "IQOS Terea UAE offers a wide selection of tobacco sticks designed for the IQOS ILUMA series. Featuring bold, smooth, and cooling flavors such as Bronze, Blue, Sun Pearl, and more, it delivers a premium heat-not-burn experience.",
        },
        {
            src: "/Banner3.png",
            alt: "Banner 2",
            heading: "Exclusive & Premium UAE Collection 2025 ",
            paragraph: "Discover premium Terea flavors from Indonesia for IQOS ILUMA.",
        },
        {
            src: "/Banner4.png",
            alt: "Banner 3",
            heading: "Massive Discounts – Limited Time",
            paragraph: "Up to 75% OFF – while stocks last!",
        },
    ];

    return (
        <div className="px-2 sm:px-6 py-6">
            <BannerSlider banners={banners} interval={4000} sliderHeight="h-[450px]" />

            <div className="bg-gray-200 mx-5 rounded-lg">
                <div className="bg-gray-100 px-4 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 px-4 max-w-[1300px] mx-auto">

                        {/* Indonesia products */}
                        <ProductCard slug="iqos-terea-apricity" image="/indonesia/apricity-indonesia.webp" brand="IQOS Indonesia" flavour="TEREA Apricity" price={130} cutPrice={220} basePath="/products" />
                        <ProductCard slug="iqos-terea-yugen" image="/indonesia/yugen-indonesia.webp" brand="IQOS Indonesia" flavour="TEREA Yugen" price={130} cutPrice={220} basePath="/products" />
                        <ProductCard slug="iqos-terea-sienna" image="/indonesia/sienna.webp" brand="IQOS Indonesia" flavour="TEREA Sienna" price={130} cutPrice={220} basePath="/products" />
                        <ProductCard slug="iqos-terea-blue" image="/indonesia/Terea-Blue.jpg" brand="IQOS Indonesia" flavour="TEREA Blue" price={130} cutPrice={220} basePath="/products" />
                        <ProductCard slug="iqos-terea-purple" image="/indonesia/image.jpg" brand="IQOS Indonesia" flavour="TEREA Purple" price={130} cutPrice={220} basePath="/products" />
                        <ProductCard slug="iqos-terea-green" image="/indonesia/green.jpeg" brand="IQOS Indonesia" flavour="TEREA Green" price={130} cutPrice={220} basePath="/products" />

                        {/* Unique UAE products */}
                        <ProductCard slug="terea-bronze" image="/indonesia/terea-bronze.webp" brand="Terea Bronze Indonesian" flavour="Terea Bronze" price={125} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-sun-pearl" image="/indonesia/sun-pearl.webp" brand="Heets Terea Sun Pearl Indonesia" flavour="Terea Sun Pearl" price={125} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-oasis-pearl" image="/indonesia/Osisipearl.webp" brand="Heets Terea Oasis Pearl Indonesia" flavour="Terea Oasis Pearl" price={125} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-purple-wave" image="/indonesia/terea-purple-wave.webp" brand="Heets Terea Purple Wave Indonesian" flavour="Terea Purple Wave" price={125} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-golden-edition" image="/indonesia/Buy-Iqos-Terea-Golden.jpg" brand="Heets Terea Golden Edition Indonesia" flavour="Terea Golden Edition" price={125} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-bright-wave" image="/indonesia/iqos-terea-bright-wave.webp" brand="Heets Terea Bright Wave Indonesian" flavour="Terea Bright Wave" price={125} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-mulint-edition" image="/indonesia/iqos-terea-mulint-edition.jpeg" brand="Terea Mulint Edition Indonesia" flavour="Terea Mulint Edition" price={125} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-emerald-edition" image="/indonesia/iqos-terea-emerald-edition-indonesia.jpeg" brand="Terea Emerald Edition Indonesia" flavour="Terea Emerald Edition" price={125} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-berrine-edition" image="/indonesia/berrie.jpeg" brand="Terea Berrine Edition Indonesia" flavour="Terea Berrine Edition" price={125} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-auburn-edition" image="/indonesia/auburn.png" brand="Terea Auburn Edition Indonesia" flavour="Terea Auburn Edition" price={125} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-minago-edition" image="/indonesia/Iqos-Terea-Minago.webp" brand="Terea Minago Edition Indonesia" flavour="Terea Minago Edition" price={125} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-scarlet-edition" image="/indonesia/Buy-Iqos-Terea-Scarlet.jpg" brand="Terea Scarlet Edition Indonesia" flavour="Terea Scarlet Edition" price={125} cutPrice={500} basePath="/products" />

                    </div>
                </div>
            </div>
        </div>
    );
}
