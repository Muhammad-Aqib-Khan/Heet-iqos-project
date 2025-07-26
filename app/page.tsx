import BannerSlider from "./(components)/BannerSlider/bannerslider";
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
      <h1 className="text-2xl font-semibold text-center mb-6">This is Home page</h1>
      <BannerSlider banners={banners} interval={4000} sliderHeight="h-[600px]" />
      <div>
      <ProductCard
        slug="banana-ice"
        image="/images/banana-ice.jpg"
        brand="CoolBrand"
        flavour="Banana Ice"
        flavourStyle="italic text-blue-500"
        price={25}
        cutPrice={35}
        basePath="/products"
        discount={29} // 👈 this shows "29% OFF"
      />
      </div>

     
    </div>
  );
}
