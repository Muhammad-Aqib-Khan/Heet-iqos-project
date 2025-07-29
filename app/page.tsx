import BannerSlider from "./(components)/BannerSlider/bannerslider";
import Button from "./(components)/Button/Button";
import InfoSection from "./(components)/infosection/infosection";

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
      <BannerSlider banners={banners} interval={4000} sliderHeight="h-[600px]" />
      {/* Iqos HEETS classic is starting from here  */}
      <div>
        {/* IQOS HEETS classic*/}
        <InfoSection
          heading1="HEETS Classic Kazakhstan"
          heading2="Top Selling Flavours"
          paragraphs={[
            {
              text: "Combining tradition with technology, IQOS Heets Classic from Kazakhstan is perfect for enjoying a rich and flavorful experience with tobacco heating devices. We offer eight distinct Heets Classic flavors, each pack containing 20 sticks, designed to be used with IQOS devices.",
              color: "text-black-600",
            },
          ]}
        />
      </div>
      <div className="bg-gray-200 ml-5 mr-5 rounded-lg">
        <div className="bg-gray-100 px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 px-4 max-w-[1200px] mx-auto">
            <ProductCard
              slug="heets-amber-selection"
              image="/classicKazakhstan/HEETS-Amber-Selection.png"
              brand="IQOS TEREA Kazakhstan"
              flavour="Heets Amber Selection"
              price={89}
              cutPrice={120}
              basePath="/products"
            />
            <ProductCard
              slug="heets-purple-wave"
              image="/classicKazakhstan/heets-purple.png"
              brand="HEETS Classic Kazakhstan"
              flavour="Heets Purple Wave"
              price={89}
              cutPrice={120}
              basePath="/products"
            />
            <ProductCard
              slug="heets-silver-selection"
              image="/classicKazakhstan/Heets-Silver-Selection.png"
              brand="HEETS Classic Kazakhstan"
              flavour="Heets Silver Selection"
              price={89}
              cutPrice={120}
              basePath="/products"
            />
            <ProductCard
              slug="heets-turquoise-selection"
              image="/classicKazakhstan/heetturquoise.webp"
              brand="HEETS Classic Kazakhstan"
              flavour="Heets Turquoise Selection"
              price={89}
              cutPrice={120}
              basePath="/products"
            />
            <ProductCard
              slug="heets-yellow-selection"
              image="/classicKazakhstan/Heets-Yellow-Selection.png"
              brand="HEETS Classic Kazakhstan"
              flavour="Heets Yellow Selection"
              price={89}
              cutPrice={120}
              basePath="/products"
            />
          </div>


          <div className="flex justify-center mt-8">
            <Button
              text="View More Flavours"
              href="/iqostereakazakhstan"
              className="bg-red-400 p-4 pl-6 pr-6 rounded-lg text-lg text-white hover:bg-red-600 hover:scale-110 transition duration-300"
            />
          </div>
        </div>
      </div>
      <div>

      </div>
      {/* IQOS HEETS Jpan is starting from here so don't be confused */}
      <div>

        <InfoSection
          heading1="Heets Terea Japan"

          paragraphs={[
            {
              text: "Discover TEREA Japan, made exclusively for IQOS ILUMA. Its ingenious SMARTCORE INDUCTION SYSTEM™ brings you improved draw, taste consistency from stick to stick, generous vapour and less lingering smell than ever before, according to most consumers.",
              color: "text-black-600",
            },
            {
              text: "IQOS ILUMA™ is designed to be used only with TEREA™ sticks.Do not use IQOS ILUMA™ and TEREA™ sticks with previous IQOS™ generations, as this may cause damage to your device.",
              color: "text-red-400",
            },
          ]}
        />

      </div>
      <div className="bg-gray-200 ml-5 mr-5 rounded-lg">
        <div className="bg-gray-100 px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 px-4 max-w-[1200px] mx-auto">
            <ProductCard
              slug="terea-oasis-pearl"
              image="/jpan/OasisPearl.jpg"
              brand="TEREA UAE"
              flavour="TEREA Oasis Pearl"
              price={249}
              cutPrice={500}
              basePath="/products"
            />
            <ProductCard
              slug="terea-menthol"
              image="/jpan/MENTHOL.jpg"
              brand="TEREA UAE"
              flavour="TEREA Menthol"
              price={249}
              cutPrice={500}
              basePath="/products"
            />
            <ProductCard
              slug="terea-rich-regular"
              image="/jpan/RichRegualr.png"
              brand="TEREA UAE"
              flavour="TEREA Rich Regular"
              price={249}
              cutPrice={500}
              basePath="/products"
            />
            <ProductCard
              slug="terea-yellow-menthol"
              image="/jpan/YellowMenthol.jpg"
              brand="TEREA UAE"
              flavour="TEREA Yellow Menthol"
              price={249}
              cutPrice={500}
              basePath="/products"
            />
            <ProductCard
              slug="terea-regular-japan"
              image="/jpan/Regularjpan.jpg"
              brand="TEREA From Japan"
              flavour="TEREA Regular From Japan"
              price={249}
              cutPrice={500}
              basePath="/products"
            />
            <ProductCard
              slug="terea-fusion-menthol"
              image="/jpan/FusionMenthol.jpg"
              brand="TEREA UAE"
              flavour="TEREA Fusion Menthol"
              price={249}
              cutPrice={500}
              basePath="/products"
            />

          </div>
            <div className="flex justify-center mt-8">
            <Button
              text="View More Flavours"
              href="/iqostereakazakhstan"
              className="bg-red-400 p-4 pl-6 pr-6 rounded-lg text-lg text-white hover:bg-red-600 hover:scale-110 transition duration-300"
            />
          </div>
        </div>
      </div>
{/* japan is ending here so next is starting from again */}











      <div>
        <InfoSection
          heading1="IQOS TEREA Kazakhstan"
          heading2="Top Selling Flavours"
          paragraphs={[
            {
              text: "Discover TEREA, exclusively for IQOS ILUMA. its ingenious SMARTCORE INDUCTION SYSTEM brings you improved draw, taste consistency from stick to stick",
              color: "text-gray-600",
            },
            {
              text: "IQOS ILUMA is designed to be used only with TEREA STICKS. DON'T use IQOS ILUMA and TEREA sticks with previous IQOS generation",
              color: "text-gray-600",
            },
            {
              text: "All Flavours of IQOS TEREA Kazakhstan are available at a 40% discount",
              color: "text-red-600",
            },
          ]}
        />
      </div>

      {/* Kazakhstan Products */}
      <div className="bg-gray-200 ml-5 mr-5 rounded-lg">
        <div className="bg-gray-100 px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 px-4 max-w-[1300px] mx-auto">
            <ProductCard
              slug="iqos-terea-silver-kazakhstan"
              image="/silver1.png"
              brand="IQOS TEREA Kazakhstan"
              flavour="Silver"
              price={130}
              cutPrice={120}
              basePath="/products"
            />
            <ProductCard
              slug="iqos-terea-amber-kazakhstan"
              image="/amber1.webp"
              brand="IQOS TEREA Kazakhstan"
              flavour="Amber"
              price={130}
              cutPrice={120}
              basePath="/products"
            />
            <ProductCard
              slug="iqos-terea-bronze-kazakhstan"
              image="/Bronze1.webp"
              brand="IQOS TEREA Kazakhstan"
              flavour="Bronze"
              price={130}
              cutPrice={120}
              basePath="/products"
            />
            <ProductCard
              slug="iqos-terea-purple-kazakhstan"
              image="/purple2.jpeg"
              brand="IQOS TEREA Kazakhstan"
              flavour="Purple"
              price={130}
              cutPrice={120}
              basePath="/products"
            />
          </div>

          <div className="flex justify-center mt-8">
            <Button
              text="View More Flavours"
              href="/iqostereakazakhstan"
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 px-4 max-w-[1300px] mx-auto">
            <ProductCard
              slug="iqos-terea-apricity-indonesia"
              image="/indonesia/apricity-indonesia.webp"
              brand="IQOS Indonesia"
              flavour="TEREA Apricity"
              price={130}
              cutPrice={120}
              basePath="/products"
            />
            <ProductCard
              slug="iqos-terea-yugen-indonesia"
              image="/indonesia/yugen-indonesia.webp"
              brand="IQOS Indonesia"
              flavour="TEREA Yugen"
              price={130}
              cutPrice={120}
              basePath="/products"
            />
            <ProductCard
              slug="iqos-terea-sienna-indonesia"
              image="/indonesia/sienna.webp"
              brand="IQOS Indonesia"
              flavour="TEREA Sienna"
              price={130}
              cutPrice={120}
              basePath="/products"
            />
            <ProductCard
              slug="iqos-terea-blue-indonesia"
              image="/indonesia/jpam-Blue.jpg"
              brand="IQOS Indonesia"
              flavour="TEREA Blue"
              price={130}
              cutPrice={120}
              basePath="/products"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6 px-4">
            <div className="w-full sm:w-[300px] lg:w-[270px]">
              <ProductCard
                slug="iqos-terea-purple-indonesia-1"
                image="/indonesia/image.jpg"
                brand="IQOS Indonesia"
                flavour="TEREA Purple"
                price={130}
                cutPrice={120}
                basePath="/products"
              />
            </div>
            <div className="w-full sm:w-[300px] lg:w-[270px]">
              <ProductCard
                slug="iqos-terea-purple-indonesia-2"
                image="/indonesia/green.jpeg"
                brand="IQOS Indonesia"
                flavour="TEREA Purple"
                price={130}
                cutPrice={120}
                basePath="/products"
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

      {/* this is for iluma prime product  */}
      <div>
        <InfoSection
          heading1="IQOS ILUMA Prime"
          paragraphs={[
            {
              text: "Designed to complement your favorite Terea Stick Flavors, IQOS ILUMA Prime Kits offer a convenient self-cleaning experience with a large variety of elegant colors. They combine incredible style and smart technology for a personalized experience for you.",
              color: "text-gray-600",
            },
          ]}
        />
      </div>
      <div className="bg-gray-200 ml-5 mr-5 rounded-lg">
        <div className="bg-gray-100 px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 px-4 max-w-[1300px] mx-auto">
            <ProductCard
              slug="iqos-iluma-prime-bright"
              image="/iluma/primebright.png"
              brand="IQOS ILUMA Kazakhstan"
              flavour="Prime Bright"
              price={130}
              cutPrice={120}
              basePath="/products"
            />
            <ProductCard
              slug="iqos-iluma-ilumaprime"
              image="/iluma/ilumaprime.png"
              brand="IQOS ILUMA Kazakhstan"
              flavour="ILUMA Prime"
              price={130}
              cutPrice={120}
              basePath="/products"
            />
            <ProductCard
              slug="iqos-iluma-prime-we-side"
              image="/iluma/prime-we-side.png"
              brand="IQOS ILUMA Kazakhstan"
              flavour="Prime WE Side"
              price={130}
              cutPrice={120}
              basePath="/products"
            />
            <ProductCard
              slug="iqos-iluma-prime-oasis"
              image="/iluma/primeoasis.png"
              brand="IQOS ILUMA Kazakhstan"
              flavour="Prime Oasis"
              price={130}
              cutPrice={120}
              basePath="/products"
            />
            <ProductCard
              slug="iqos-iluma-prime-oasis-limited"
              image="/iluma/prime-oasis-limited-edition.jpeg"
              brand="IQOS ILUMA Kazakhstan"
              flavour="Prime Oasis Limited"
              price={130}
              cutPrice={120}
              basePath="/products"
            />
          </div>

          <div className="flex justify-center mt-8">
            <Button
              text="View More Flavours"
              href="/iqosilumakazakhstan"
              className="bg-red-400 p-4 pl-6 pr-6 rounded-lg text-lg text-white hover:bg-red-600 hover:scale-110 transition duration-300"
            />
          </div>
        </div>
      </div>
      {/* this is the iluma one and there  */}
      <div>
        <InfoSection
          heading1="IQOS ILUMA One"
        />
      </div>

      {/* this section is where the text is starting  */}

      <section className="bg-gray-50 w-full max-w-5xl mx-auto my-8 shadow rounded px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
        <h1 className="text-xl md:text-3xl font-bold ">Getting Familiar With IQOS Device<br />IQOS ILUMA ONE Device Dubai</h1>
        <img src="/iluma/primeoasis.png" alt="IQOS Device Banner" className="w-full h-auto rounded-lg my-6 object-fit object-cover max-h-64 sm:max-h-70 md:max-h-86" />
        <p className="mb-4">IQOS or heated tobacco products tobacco are the game-changing solution to cut down all downsides of conventional methods of tobacco smoking. It’s time to bid farewell to an ashy smoking experience as you embrace the seamlessly designed IQOS devices Dubai for tobacco heat sticks. These devices are crafted to unlock the divine richness of nicotine vapors that combine authentic tobacco with tempting flavors.</p>
        <p className="mb-4">With IQOS device, tobacco isn’t “burnt” as in traditional tobacco cigarettes, which induces the release of a massive amount of toxins as you proceed with smoking. The tip of an ordinary tobacco cigarette reaches around 800°C by the time you take a puff,  whereas this risk is significantly reduced by 95% with IQOS Heets UAE. These smart devices heat the tobacco at 350 degrees Celsius without combustion. This introduces you to richer yet safer vapors.</p>
        <p className="mb-4">Say goodbye to all the potential hiccups with a healthier alternative to smoking cigarettes, smartly put together to refine your smoking experiences with a balanced equation of style and functionality.</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">What Are Heets For IQOS?</h2>
        <img src="/Banner3.png" alt="Heets for IQOS Banner" className="w-full h-auto rounded-lg my-6 object-cover max-h-54 sm:max-h-70 md:max-h-86" />
        <p className="mb-4">Heets are tobacco sticks, specially designed to be used in IQOS devices. They consist of a heated tobacco unit that contains real tobacco, often combined with tempting flavors. IQOS Heets Dubai offers you a cleaner experience with a mouthpiece filter and polymer-film filter paired with an outer and mouth-end paper that refines your whole experience.</p>
        <p className="mb-4">Pick your favorite Heets flavors compatible with your IQOS device, and insert them into the blade holder. The device starts heating the tobacco and you’re all set to cherish the unique flavors of your choice. This way, the health risks are significantly reduced with a richer and enhanced tobacco experience.</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Benefits Of Switching To IQOS Devices</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li><b>Reduces Harm:</b> Switching to IQOS reduces many health risks associated with smoking cigarettes. These devices offer a cleaner alternative to conventional smoking by minimizing the number of toxic by-products.</li>
          <li><b>Elegance And Sophistication:</b> Step into a timeless era of elegance and sophistication with IQOS devices. They eliminate smoke and odor, offering a pleasant experience. The sleek designs add to your style, while the variety of options allows you to choose your favorite model in different colors to complement your outfits.</li>
          <li><b>Smooth Experience:</b> IQOS Dubai is designed to be conveniently operable even if you’re a newbie. It features a rapid heating technology that minimizes hassle and lets you satisfy your cravings within a few moments, so the time is always by your side!</li>
          <li><b>Eco-friendly Joy:</b> The heat-not-burn technology reduces the environmental impact of tobacco smoking. By switching to this smoke-free and ash-free tobacco alternative, you can contribute to a cleaner, greener world.</li>
          <li><b>Pleasant Flavors:</b> Choose from a wide selection of Heets flavors that combine tobacco's classical taste with fruity essences to create a variety of flavors that will appeal to your palate.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">Legal Requirements For Buying IQOS Heets Online in UAE</h2>
        <p className="mb-4">If you’re ready to indulge in the incredible range of Heets flavors in Dubai, it’s crucial to look into the legality landscape before heading to buy your favorite devices for tobacco sticks. The legal age to buy IQOS Dubai online is 18 years as per the regional legal provisions. Savor our delicious flavors with fine tobacco innovations if you’re at least 18 years old.</p>
        <p className="mb-4">Refrain from falsifying your age information as it leads to severe penalizing under the UAE law. We strictly comply with the local IQOS laws and uphold the aspects of legality to keep legal complications always at bay.</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Buy IQOS Heets Devices in Dubai, UAE</h2>
        <p className="mb-4">We provide the widest collection of Heets flavors and IQOS Heets online. IQOS devices bring forth the most practical approach to quitting ordinary smoking and switching to a safer alternative. You can get your hands on the smartest devices to pair with our wide range of Heets flavors.</p>
        <p className="mb-4">Enjoy two consecutive tobacco smoking sessions before you need to recharge your IQOS device. For IQOS enthusiasts, Heets IQOS UAE's extensive selection is no less than a treat. Find the most stylish, compact, and colorful models that combine elegance with incredible functionality. Explore IQOS ILUMA Prime, IQOS Lil Solid, IQOS ILUMA, IQOS Lil, and other hottest-selling varieties.</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Swift Delivery Options In UAE</h2>
        <p className="mb-4">Our delivery network makes it easier for you to satisfy your tobacco cravings with a swift delivery process that takes around 2-3 hours from placing an order to getting it delivered to your doorstep in UAE.</p>
        <p className="mb-4">We deliver in:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Abu Dhabi</li>
          <li>Fujairah</li>
          <li>Sharjah</li>
          <li>Ras-al-Khaimah</li>
          <li>Ajman</li>
          <li>Umm-al-Quwain</li>
          <li>Al-ain</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">How To Order IQOS Heets Devices In UAE</h2>
        <ol className="list-decimal pl-6 mb-4 space-y-1">
          <li>Browse to pick your desired model online along with the compatible Heet sticks.</li>
          <li>Add to the cart and place your order within a few seconds.</li>
          <li>Enjoy free delivery all across the UAE for each order over 201 AED. Pay through your preferred payment method and enjoy your IQOS in Dubai.</li>
          <li>Enjoy a hassle-free online shopping experience with Heets IQOS UAE to buy IQOS devices and Heets online from the comfort of your home without even stepping out.</li>
        </ol>

        <h2 className="text-xl font-semibold mt-8 mb-2">Unveiling The Remarkable IQOS Technology</h2>
        <p className="mb-4">In the world of rapid inventions and science revolutionizing, experts bring forward the new heated tobacco “no-smoke” solution to the health threats posed by ordinary smoking. Securing more than 10% of the tobacco industry, the IQOS device is today ranked among the most popular tobacco products.</p>
        <p className="mb-4">According to Philip Morris, IQOS technology significantly induces an experience similar to ordinary tobacco cigarettes without combustion, thus reducing health threats by up to 95%. We bring forward to you a strikingly huge variety of IQOS devices and Heets for an exhilarating experience.</p>
        <p className="mb-4">An IQOS unit is practically free from smoke, ash, fire, and other residues of combustion. This, in turn, makes room to have a vivid experience with flavorful Heets of real tobacco that last for about 14 puffs. The difference is evident considering the above-mentioned aspects. No combustion leads to a reduced amount of detrimental chemical substances.</p>
        <p className="mb-4">Our IQOS range is exclusively put together to progressively liberate smokers from the extensive list of harmful effects they must encounter while smoking conventional cigarettes. These products exhibit a significantly lower degree of health risk.</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Enjoy A Safer Smoking Experience With Us:</h2>
        <p className="mb-4">In a progressive endeavor to reduce the impact of conventional smoking on human life and the environment, we introduce you to our finest collection of heated tobacco sticks, IQOS Heets, and a lot more accessories involved for the betterment.</p>
        <p className="mb-4">We aim to provide our customers with the fastest delivery services across UAE to enhance the quality of your experience. Smoking is not an inevitable process; thus, it can be addressed by revolutionizing conventional practices and switching to modern solutions like Heets UAE.</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Why Do People Trust HEETS IQOS UAE?</h2>
        <img src="/Banner4.png" alt="Why Trust HEETS IQOS UAE Banner" className="w-full h-auto rounded-lg my-6 object-cover max-h-64 sm:max-h-80 md:max-h-96" />
        <h3 className="text-lg font-semibold mt-4 mb-2">How to Use IQOS Heets</h3>
        <p className="mb-4">It's simple. We deliver precisely what we promise every single time. Our reputation as a trusted provider of IQOS and HEETS in the Dubai, UAE has been built over years of consistently meeting and exceeding customer expectations. When you choose us, you're choosing a team that genuinely cares about your experience.</p>
        <p className="mb-4">Here's why so many customers trust us and keep coming back:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>100% authentic products: All our sticks and devices for sale are 100% authentic. There are no knockoffs, no reproductions – just pure, original quality you can trust.</li>
          <li>Fast and reliable delivery: We understand that you don't like waiting, so most orders are delivered the same day or, within 24 hours, straight to your doorstep.</li>
          <li>Competitive prices: Coming in at a fair and affordable price for that premium quality you deserve without having to take out a loan.</li>
          <li>Expert customer support: Our team consists of friendly, knowledgeable individuals who are always ready to assist you in selecting the right product or resolving any issues you may have.</li>
        </ul>
        <p className="mb-4">When you shop with HEETS IQOS UAE, you're not just buying a product. You're joining a community of satisfied customers who know they're getting nothing but the best. Every order is handled with care, every question is answered with respect, and every customer is treated like family.</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">What Makes Us Outshine?</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>✔ Uncompromised Quality At Best Prices: Featuring cutting-edge technology, our products are exclusively formulated and designed to meet all your needs as a potential smoker looking for a safer alternative to switch to.</li>
          <li>✔ Extensive Range of Products: From the sleekest and most gorgeous heated tobacco devices to the finest Heets formula, we’ve got the most comprehensive range of products to equip you with everything you need to quench your smoking desires.</li>
          <li>✔ Embrace An Unparalleled Experience With Hassle-Free Delivery: Our expert team, through an integrated delivery system, ensures to deliver your desired products right to your doorstep anywhere in UAE and Dubai within 2 to 3 days.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">Exclusive Offers and Seasonal Deals You Can't Miss</h2>
        <p className="mb-4">Who doesn't like a good deal? Here at HEETS IQOS Dubai, UAE, we want to spoil our customers with something rotten. Throughout the year, we will offer special promotions, seasonal discounts, and exclusive bundles to ensure you get the best value for your money.</p>
        <p className="mb-4">Watch for exciting deals such as</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Buy more, save more offers that help you stock up and save.</li>
          <li>Festive discounts during holidays and special occasions.</li>
          <li>Limited-time offers on rare editions and exclusive flavours.</li>
        </ul>
        <p className="mb-4">Keep ahead of the crowd by following us on WhatsApp or giving us a call. That means you will always know when the next massive deal is live.</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Why Choose IQOS HEETS UAE? A Quick Recap</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Products are 100% authentic and safe for consumption.</li>
          <li>Fast same-day delivery anywhere in the UAE</li>
          <li>Unique limited edition books you can't find anywhere else.</li>
          <li>Unbeatable prices on every order</li>
          <li>Friendly, expert support whenever you need help</li>
        </ul>
        <p className="mb-4">So what are you waiting for? Go to the next level and reward yourself with the finest mi-lusión smoking experience you deserve.</p>
        <p className="mb-4">Contact us and order your favourite HEETS today.<br />Ready to kick your tobacco game up a notch? Don't wait any longer. Your ideal HEETS sticks or IQOS device is only a message away.</p>
        <p className="mb-4">Here's why you'll enjoy shopping with us:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>100% authentic, real HEETS and IQOS devices</li>
          <li>Quick delivery at competitive rates; thousands in the UAE trust us!</li>
          <li>Personal service via WhatsApp or a rapid call on the phone, with the result that ordering is a cinch</li>
          <li>We'll ensure that your experience is seamless, enjoyable, and unforgettable because you deserve nothing less.</li>
        </ul>
        <p className="mb-4 font-semibold">Order Now and See Why We're the UAE's Trusted Choice</p>
        <p className="mb-4">When it comes to enjoying tobacco in style, nothing compares to authentic HEETS and the latest IQOS innovations. Join the thousands of satisfied customers who trust us every day. Place your order now and discover what premium service truly feels like.</p>
        <p className="mb-4">Call us or message us on WhatsApp now; your order will be ready when you are.</p>
      </section>
    </div>
  );
}
