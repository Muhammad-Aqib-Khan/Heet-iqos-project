import BannerSlider from "../(components)/BannerSlider/bannerslider";
import ProductCard from "../(components)/productcard/productcard";

export default function page() {
    const banners = [
        {
            src: "/Jpan/Banner1.jpg",
            alt: "Banner 1",
            heading: "Buy IQOS Terea Japan – Premium Heat Sticks",
            paragraph:
                "IQOS Terea Japan offers an exclusive collection of tobacco sticks designed for the IQOS ILUMA series. Featuring rich, smooth, and innovative flavors like Regular, Menthol, Purple Menthol, Black Menthol, and more, it delivers a satisfying heat-not-burn experience with zero blade cleaning required.",
        },
        {
            src: "/Jpan/Banner2.webp",
            alt: "Banner 2",
            heading: "IQOS Terea Japan Collection 2025",
            paragraph: "Experience cutting-edge tobacco innovation.",
        },
        {
            src: "/Jpan/Banner3.webp",
            alt: "Banner 3",
            heading: "Limited Time Offer",
            paragraph: "Get your favorite Terea flavors before stock runs out!",
        },
    ];

    return (
        <div className="px-2 sm:px-6 py-6">
            <BannerSlider banners={banners} interval={4000} sliderHeight="h-[450px]" />

            <div className="bg-gray-200 ml-5 mr-5 rounded-lg">
                <div className="bg-gray-100 px-4 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 px-4 max-w-[1300px] mx-auto">
                        <ProductCard
                            slug="terea-oasis-pearl"
                            image="/Jpan/OasisPearl.jpg"
                            brand="TEREA UAE"
                            flavour="TEREA Oasis Pearl"
                            price={249}
                            cutPrice={500}
                            basePath="/products"
                        />
                        <ProductCard
                            slug="terea-mint-from-japan"
                            image="/Jpan/MENTHOL.jpg"
                            brand="TEREA UAE"
                            flavour="TEREA Mint From Japan"
                            price={249}
                            cutPrice={500}
                            basePath="/products"
                        />
                        <ProductCard
                            slug="terea-rich-regular"
                            image="/Jpan/RichRegualr.png"
                            brand="TEREA UAE"
                            flavour="TEREA Rich Regular"
                            price={249}
                            cutPrice={500}
                            basePath="/products"
                        />
                        <ProductCard
                            slug="terea-yellow-menthol"
                            image="/Jpan/YellowMenthol.jpg"
                            brand="TEREA UAE"
                            flavour="TEREA Yellow Menthol"
                            price={249}
                            cutPrice={500}
                            basePath="/products"
                        />
                        <ProductCard
                            slug="terea-regular-japan"
                            image="/Jpan/Regularjpan.jpg"
                            brand="TEREA From Japan"
                            flavour="TEREA Regular From Japan"
                            price={249}
                            cutPrice={500}
                            basePath="/products"
                        />
                        <ProductCard
                            slug="terea-fusion-menthol"
                            image="/Jpan/FusionMenthol.jpg"
                            brand="TEREA UAE"
                            flavour="TEREA Fusion Menthol"
                            price={249}
                            cutPrice={500}
                            basePath="/products"
                        />

                        {/* Missing products added here */}
                        <ProductCard
                            slug="terea-sun-pearl"
                            image="/Jpan/sunpearl.jpg"
                            brand="TEREA UAE"
                            flavour="TEREA Sun Pearl"
                            price={249}
                            cutPrice={500}
                            basePath="/products"
                        />
                        <ProductCard
                            slug="terea-purple-menthol"
                            image="/Jpan/purple.jpg"
                            brand="TEREA UAE"
                            flavour="TEREA Purple Menthol"
                            price={249}
                            cutPrice={500}
                            basePath="/products"
                        />
                        <ProductCard
                            slug="terea-smooth-regular"
                            image="/Jpan/Terea smooth Regular.jpg"
                            brand="TEREA UAE"
                            flavour="TEREA Smooth Regular"
                            price={249}
                            cutPrice={500}
                            basePath="/products"
                        />
                        <ProductCard
                            slug="terea-ruby-regular"
                            image="/Jpan/ruby.jpg"
                            brand="TEREA UAE"
                            flavour="TEREA Ruby Regular"
                            price={249}
                            cutPrice={500}
                            basePath="/products"
                        />
                        <ProductCard
                            slug="terea-balanced-regular"
                            image="/Jpan/TEREA Balanced Regular.jpg"
                            brand="TEREA UAE"
                            flavour="TEREA Balanced Regular"
                            price={249}
                            cutPrice={500}
                            basePath="/products"
                        />
                        <ProductCard
                            slug="terea-black-purple-menthol"
                            image="/Jpan/TEREA Black Purple Menthol.jpg"
                            brand="TEREA UAE"
                            flavour="TEREA Black Purple Menthol"
                            price={249}
                            cutPrice={500}
                            basePath="/products"
                        />
                        <ProductCard
                            slug="terea-black-menthol"
                            image="/Jpan/TEREA Black Menthol.jpg"
                            brand="TEREA UAE"
                            flavour="TEREA Black Menthol"
                            price={249}
                            cutPrice={500}
                            basePath="/products"
                        />
 
                    </div>

                </div>
            </div>

            <section className="bg-gray-50 w-full max-w-5xl mx-auto my-8 shadow rounded px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
                <h2 className="text-xl md:text-3xl font-bold mb-6">
                    IQOS Terea Japan – Advanced Tobacco Experience with IQOS ILUMA
                </h2>
                <p className="mb-4">
                    <strong>IQOS Terea Japan</strong> is designed exclusively for the latest IQOS ILUMA devices, providing a refined, clean tobacco experience without blade cleaning. These innovative sticks use SMARTCORE INDUCTION SYSTEM™ technology to heat the tobacco precisely, producing rich flavor and no smoke or ash.
                </p>
                <p className="mb-4">
                    Each stick contains premium Japanese-processed tobacco, heated at optimal temperatures to deliver a consistent and satisfying session every time.
                </p>

                <h3 className="text-lg font-semibold mt-8 mb-2">Why Choose IQOS Terea Japan?</h3>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li><strong>Blade-Free Design:</strong> No blade, no cleaning — just smooth sessions.</li>
                    <li><strong>Exclusive Compatibility:</strong> Works only with IQOS ILUMA series.</li>
                    <li><strong>Flavor Variety:</strong> From classic tobacco to cooling menthol blends.</li>
                    <li><strong>Consistent Heating:</strong> SMARTCORE technology ensures even taste in every puff.</li>
                    <li><strong>Minimal Odor:</strong> Heat-not-burn innovation keeps the air cleaner.</li>
                </ul>

                <h3 className="text-lg font-semibold mt-8 mb-2">Popular Terea Flavors</h3>
                <p className="mb-4">Our top-selling Terea Japan flavors include:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li><strong>Regular:</strong> Smooth and balanced tobacco.</li>
                    <li><strong>Menthol:</strong> Fresh, cooling sensation.</li>
                    <li><strong>Purple Menthol:</strong> Berry-infused coolness.</li>
                    <li><strong>Black Menthol:</strong> Extra-strong menthol kick.</li>
                    <li><strong>Yellow Menthol:</strong> Citrus + cool blend.</li>
                    <li><strong>Tropical Menthol:</strong> Exotic fruits with icy freshness.</li>
                    <li><strong>Smooth Regular:</strong> Lighter, easy-going tobacco profile.</li>
                </ul>

                <h3 className="text-lg font-semibold mt-8 mb-2">How to Use IQOS Terea Japan</h3>
                <ol className="list-decimal pl-6 mb-4 space-y-1">
                    <li>Open the pack and take one Terea stick.</li>
                    <li>Insert it into your IQOS ILUMA holder until it clicks.</li>
                    <li>Press the button to start heating.</li>
                    <li>Wait for vibration or light signal — then enjoy.</li>
                    <li>Dispose of the used stick in regular waste after use.</li>
                </ol>

                <h3 className="text-lg font-semibold mt-8 mb-2">Why Buy Terea Japan From Us?</h3>
                <p className="mb-4">
                    At <strong>IQOS Terea Japan Store</strong>, we guarantee original, imported products directly from Japan with freshness and authenticity ensured.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li><strong>100% Authentic:</strong> No replicas, no risks.</li>
                    <li><strong>Fast Delivery:</strong> Across UAE & Japan markets.</li>
                    <li><strong>Multiple Payment Options:</strong> Cash, card, and secure online checkout.</li>
                    <li><strong>Expert Support:</strong> Guidance on device use and flavor selection.</li>
                </ul>
                <p className="mb-4 font-semibold">
                    Order now to enjoy the latest tobacco technology with IQOS Terea Japan — the future of smoke-free satisfaction.
                </p>
            </section>
        </div>
    );
}
