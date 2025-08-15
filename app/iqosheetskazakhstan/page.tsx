import BannerSlider from "../(components)/BannerSlider/bannerslider";
import ProductCard from "../(components)/productcard/productcard";

export default function Page() {
    const banners = [
        {
            src: "/Banner1.jpeg",
            alt: "Banner 1",
            heading: "Buy IQOS Terea Kazakhstan in UAE",
            paragraph:
                "Heets IQOS UAE brings you Terea Kazakhstan sticks, a premium smoking alternative crafted exclusively for IQOS ILUMA devices. Enjoy a cleaner, smoother, and sophisticated experience with authentic, sealed products straight from Kazakhstan.",
        },
        {
            src: "/Banner3.png",
            alt: "Banner 2",
            heading: "Premium Flavors Available",
            paragraph: "Choose from Amber, Turquoise, Silver, Teak, Purple Wave, Yellow, Summer Wave, Green Zing, Ruby Fuse, Twilight Pearl, Sun Pearl, and Bronze.",
        },
        {
            src: "/Banner4.png",
            alt: "Banner 3",
            heading: "Massive Discounts – Limited Time",
            paragraph: "Up to 74% OFF – while stocks last!",
        },
    ];

    return (
        <div className="px-2 sm:px-6 py-6">
            <BannerSlider banners={banners} interval={4000} sliderHeight="h-[450px]" />

            <div className="bg-gray-200 mx-5 rounded-lg">
                <div className="bg-gray-100 px-4 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 px-4 max-w-[1300px] mx-auto">

                        {/* UAE Terea Kazakhstan Products */}
                        <ProductCard slug="terea-turquoise" image="/kazakhstan/heets-terea-turquoise.jpeg" brand="Terea Kazakhstan" flavour="TEREA Turquoise Kazakhstan" price={130} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-amber" image="/amber1.webp" brand="Terea Kazakhstan" flavour="TEREA Amber Kazakhstan" price={130} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-silver" image="/silver1.png" brand="Terea Kazakhstan" flavour="TEREA Silver Kazakhstan" price={130} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-teak" image="/kazakhstan/terea-teak.webp" brand="Terea Kazakhstan" flavour="TEREA Teak Kazakhstan" price={130} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-purple-wave" image="/purple2.jpeg" brand="Terea Kazakhstan" flavour="TEREA Purple Wave Kazakhstan" price={130} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-yellow" image="/kazakhstan/Terea-Yellow.webp" brand="Terea Kazakhstan" flavour="TEREA Yellow Kazakhstan" price={130} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-summer-wave" image="/kazakhstan/Terea-Summer-Wave.jpg" brand="Terea Kazakhstan" flavour="TEREA Summer Wave Kazakhstan" price={130} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-green-zing" image="/kazakhstan/terea-green-zing.jpeg" brand="Terea Kazakhstan" flavour="TEREA Green Zing Kazakhstan" price={130} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-ruby-fuse" image="/kazakhstan/terea-ruby-fuse.webp" brand="Terea Kazakhstan" flavour="TEREA Ruby Fuse Kazakhstan" price={130} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-twilight-pearl" image="/kazakhstan/terea-twilight-pearl.jpeg" brand="Terea Kazakhstan" flavour="TEREA Twilight Pearl Kazakhstan" price={130} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-sun-pearl" image="/kazakhstan/tera-sunpearl.png" brand="Terea Kazakhstan" flavour="TEREA Sun Pearl Kazakhstan" price={130} cutPrice={500} basePath="/products" />
                        <ProductCard slug="terea-bronze" image="/Bronze1.webp" brand="Terea Kazakhstan" flavour="TEREA Bronze Kazakhstan" price={130} cutPrice={500} basePath="/products" />

                    </div>
                </div>
            </div>

            {/* Descriptive Text Section */}
            <div className="max-w-[1300px] mx-auto mt-10 px-4">
                <h2 className="text-2xl font-bold mb-4">Experience Authentic Kazakhstan Quality</h2>
                <p className="mb-2">
                    Heets IQOS UAE brings you Terea Kazakhstan sticks, a premium smoking alternative crafted exclusively for IQOS ILUMA devices. We make it easy for UAE smokers to enjoy a cleaner, smoother, and more sophisticated experience with authentic, sealed products straight from Kazakhstan.
                </p>
                <p className="mb-2">
                    Terea Kazakhstan is a heat-not-burn tobacco product developed for IQOS ILUMA. Unlike traditional smoking, these sticks use innovative induction heating to deliver nicotine satisfaction without smoke, ash, or burnt tobacco.
                </p>
                <h3 className="font-semibold mt-4">Why UAE Consumers Love It:</h3>
                <ul className="list-disc ml-6 mb-2">
                    <li>Modern Alternative to Smoking: Reduces harmful tars and smoke emissions.</li>
                    <li>Discreet & Odor-Free: Keeps you fresh without lingering smells.</li>
                    <li>Genuine Flavors: Rich and mellow taste from delicate tobacco processing.</li>
                    <li>Health-Conscious: Safer alternative with up to 95% fewer harmful chemicals.</li>
                    <li>Eco-Friendly & Mess-Free: No ash, sustainable, and clean.</li>
                </ul>
                <h3 className="font-semibold mt-4">How to Use:</h3>
                <ol className="list-decimal ml-6 mb-2">
                    <li>Insert the Terea stick into IQOS ILUMA, colored end up.</li>
                    <li>Tap the device button to start heating (approx. 20 seconds).</li>
                    <li>Wait for vibration/light cue signaling readiness.</li>
                    <li>Take up to 14 puffs or 6 minutes of usage.</li>
                    <li>Dispose of the used stick responsibly.</li>
                </ol>
                <h3 className="font-semibold mt-4">Benefits:</h3>
                <ul className="list-disc ml-6 mb-2">
                    <li>Cleaner alternative to cigarettes with no ash and less harmful emissions.</li>
                    <li>Enhanced flavor with smooth vapor and authentic taste.</li>
                    <li>Easy to use and maintenance-free.</li>
                    <li>Compact, modern, and discreet design.</li>
                </ul>
                <p className="mt-4">
                    Purchase directly from Heets IQOS UAE to ensure 100% authentic products, fresh stock, secure packaging, and fast delivery across all Emirates including Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, Fujairah, RAK, and UAQ.
                </p>
                <p className="mt-2 font-semibold">Order Terea Kazakhstan Today and enjoy the premium heat-not-burn experience in the UAE!</p>
            </div>
        </div>
    );
}
