import BannerSlider from "../(components)/BannerSlider/bannerslider";
import ProductCard from "../(components)/productcard/productcard";


export default function page() {
  const banners = [
    {
      src: "/Banner1.jpeg",
      alt: "Banner 1",
      heading: "Buy Heets Classic Kazakhstan Dubai, UAE",
      paragraph: "Heets Classic is a collection of premium tobacco sticks designed for IQOS devices. Featuring rich and smooth traditional flavors like Bronze, Amber, Yellow, Teak, and Russet, it offers a satisfying heat-not-burn experience without the smoke and ash of cigarettes. Perfect for those seeking a refined tobacco alternative.",
    },
    {
      src: "/Banner3.png",
      alt: "Banner 2",
      heading: "IQOS Collection 2025",
      paragraph: "Explore the new trends.",
    },
    {
      src: "/Banner4.png",
      alt: "Banner 3",
      heading: "Limited Time Offer",
      paragraph: "Hurry up before it ends!",
    },
  ];
  return (
    <div className="px-2 sm:px-6 py-6">
      <BannerSlider banners={banners} interval={4000} sliderHeight="h-[450px]" />
      <div className="bg-gray-200 ml-5 mr-5 rounded-lg">
        <div className="bg-gray-100 px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 px-4 max-w-[1300px] mx-auto">
            <ProductCard
              slug="heets-turquoise-selection-uae"
              image="/classicKazakhstan/heetturquoise.webp"
              brand="Heets Turquoise Selection"
              flavour="Menthol Flavor"
              flavourStyle="italic text-blue-500"
              price={89}
              cutPrice={120}
              basePath=""
              discount={26}
            />

            <ProductCard
              slug="heets-purple-wave-selection-uae"
              image="/classicKazakhstan/heets-purple.png"
              brand="Heets Purple Wave Selection"
              flavour="Berry Menthol Flavor"
              flavourStyle="italic text-purple-500"
              price={89}
              cutPrice={120}
              basePath="/classic-kazakhstan"
              discount={26}
            />

            <ProductCard
              slug="heets-amber-selection-uae"
              image="/classicKazakhstan/amberheetsiqos.png"
              brand="Heets Amber Selection"
              flavour="Tobacco Flavor"
              flavourStyle="italic text-yellow-700"
              price={89}
              cutPrice={120}
              basePath="/classic-kazakhstan"
              discount={26}
            />

            <ProductCard
              slug="heets-yellow-selection-uae"
              image="/classicKazakhstan/Heets-Yellow-Selection.png"
              brand="Heets Yellow Selection"
              flavour="Balanced Tobacco Flavor"
              flavourStyle="italic text-yellow-500"
              price={89}
              cutPrice={120}
              basePath="/classic-kazakhstan"
              discount={26}
            />

            <ProductCard
              slug="heets-silver-selection-uae"
              image="/classicKazakhstan/Heets-Silver-Selection.png"
              brand="Heets Silver Selection"
              flavour="Light Flavor"
              flavourStyle="italic text-gray-400"
              price={89}
              cutPrice={120}
              basePath="/classic-kazakhstan"
              discount={26}
            />

            <ProductCard
              slug="heets-bronze-selection-uae"
              image="/classicKazakhstan/IQOS-HEETS-Bronze.png"
              brand="Heets Bronze Selection"
              flavour="Tobacco Flavor"
              flavourStyle="italic text-orange-700"
              price={89}
              cutPrice={150}
              basePath="/classic-kazakhstan"
              discount={41}
            />

            <ProductCard
              slug="heets-green-zing-selection-uae"
              image="/classicKazakhstan/green-zing.webp"
              brand="Heets Green Zing Selection"
              flavour="Citrus Menthol Flavor"
              flavourStyle="italic text-green-500"
              price={89}
              cutPrice={120}
              basePath="/classic-kazakhstan"
              discount={26}
            />

            <ProductCard
              slug="heets-summer-wave-selection-uae"
              image="/classic/summerwave.webp"
              brand="Heets Summer Wave Selection"
              flavour="Fruity Twist Flavor"
              flavourStyle="italic text-pink-500"
              price={89}
              cutPrice={150}
              basePath="/classic-kazakhstan"
              discount={41}
            />



          </div>


        </div>
      </div>
      <section className="bg-gray-50 w-full max-w-5xl mx-auto my-8 shadow rounded px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
  <h2 className="text-xl md:text-3xl font-bold mb-6">Heets Classic Kazakhstan – A Smoother Tobacco Experience with IQOS UAE</h2>
  <p className="mb-4">
    <strong>Heets Classic Kazakhstan</strong> delivers a smooth, balanced tobacco experience for IQOS users across the UAE. Specially designed for all IQOS models, these heat sticks provide authentic tobacco satisfaction using innovative heat-not-burn technology — without the smoke, ash, or odor of traditional cigarettes.
  </p>
  <p className="mb-4">
    Each stick contains specially processed tobacco, heated precisely at <strong>350°C</strong> to release rich vapor instead of smoke, ensuring a clean, flavorful session every time.
  </p>

  <h3 className="text-lg font-semibold mt-8 mb-2">Why Choose Heets Classic Kazakhstan?</h3>
  <ul className="list-disc pl-6 mb-4 space-y-1">
    <li><strong>Heat-Not-Burn Innovation:</strong> No combustion, no ash. Reduces harmful chemical production by up to 95% compared to cigarettes.</li>
    <li><strong>Device Compatibility:</strong> Works with IQOS 3 DUO, IQOS LIL SOLID, and Lambda models.</li>
    <li><strong>Convenient Packs:</strong> Each pack includes 20 individually wrapped sticks, preserving flavor and freshness.</li>
    <li><strong>Cigarette-Like Duration:</strong> Each stick provides around 6 minutes or 14 puffs of use.</li>
    <li><strong>Minimal Odor:</strong> Smoke-free, ash-free, and suitable for indoor use where permitted.</li>
  </ul>

  <h3 className="text-lg font-semibold mt-8 mb-2">Flavors of Heets Classic Kazakhstan</h3>
  <p className="mb-4">Choose from 9 unique flavor variants, each tailored for distinct preferences:</p>
  <ul className="list-disc pl-6 mb-4 space-y-1">
    <li><strong>Amber Selection:</strong> Woody tobacco with nutty tones — classic and familiar.</li>
    <li><strong>Bronze Selection:</strong> Cocoa-rich tobacco for bold flavor lovers.</li>
    <li><strong>Green Zing:</strong> Citrus-infused menthol — perfect for warm weather.</li>
    <li><strong>Purple Wave:</strong> Fruity berries with menthol — youthful and unique.</li>
    <li><strong>Silver Selection:</strong> Light, clean tobacco with minimal additives.</li>
    <li><strong>Summer Wave:</strong> Tropical fruit + menthol — relaxing and fresh.</li>
    <li><strong>Turquoise Selection:</strong> Menthol and spices — refreshing yet refined.</li>
    <li><strong>Yellow Green Selection:</strong> Citrus-herbal profile — vibrant and energetic.</li>
    <li><strong>Yellow Selection:</strong> Smooth, mellow tobacco with light aroma — great for casual use.</li>
  </ul>

  <h3 className="text-lg font-semibold mt-8 mb-2">How to Use Heets Classic Kazakhstan</h3>
  <ol className="list-decimal pl-6 mb-4 space-y-1">
    <li>Remove one stick from the pack and inspect for damage.</li>
    <li>Insert the stick (tobacco side down) into your IQOS holder.</li>
    <li>Hold the button until the device vibrates or the light turns solid.</li>
    <li>Wait ~20 seconds for heating to complete.</li>
    <li>Take gentle puffs for up to 6 minutes or 14 puffs.</li>
    <li>After use, lift the cap and pull the stick straight out — do not twist.</li>
    <li>Dispose of the used stick in regular waste (non-burning).</li>
  </ol>

  <h3 className="text-lg font-semibold mt-8 mb-2">Why Buy Heets Classic Kazakhstan From Us?</h3>
  <p className="mb-4">
    At <strong>HEETS IQOS UAE</strong>, we pride ourselves on offering only authentic IQOS products backed by manufacturer warranties. With over 10 years of experience in the UAE tobacco alternative market, our reputation speaks for itself.
  </p>
  <ul className="list-disc pl-6 mb-4 space-y-1">
    <li><strong>100% Authenticity:</strong> Original products only. No replicas. No risks.</li>
    <li><strong>Express 2-Hour Delivery:</strong> Across Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, RAK & Al Ain.</li>
    <li><strong>Multiple Payment Options:</strong> Cash on delivery, card machines at your door, or secure online payment.</li>
    <li><strong>Knowledgeable Support:</strong> Our expert team helps with product selection, usage tips, and more — 7 days a week.</li>
  </ul>
  <p className="mb-4 font-semibold">Place your order now and experience the cleaner, smoother world of IQOS with Heets Classic Kazakhstan — only from the trusted source in the UAE.</p>
</section>

    </div>
  )
}
