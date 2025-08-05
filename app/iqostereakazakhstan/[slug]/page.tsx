import { notFound } from "next/navigation";
import Image from "next/image";

interface Product {
  slug: string;
  name: string;
  flavour: string;
  description: string;
  image: string;
  price: number;
  cutPrice: number;
}

// Replace this with your real database or API later
const productData: Product[] = [
  {
    slug: "heets-yellow-selection-uae",
    name: "Heets Yellow Selection",
    flavour: "Balanced Tobacco Flavor",
    description: "A smooth and mellow tobacco experience for casual users.",
    image: "/classicKazakhstan/Heets-Yellow-Selection.png",
    price: 89,
    cutPrice: 120,
  },
  {
    slug: "heets-bronze-selection-uae",
    name: "Heets Bronze Selection",
    flavour: "Tobacco Flavor",
    description: "A bold, cocoa-rich traditional tobacco flavor for experienced smokers.",
    image: "/classicKazakhstan/IQOS-HEETS-Bronze.png",
    price: 89,
    cutPrice: 150,
  },
  {
    slug: "heets-green-zing-selection-uae",
    name: "Heets Green Zing Selection",
    flavour: "Citrus Menthol Flavor",
    description: "Zesty citrus meets menthol — perfect for summer.",
    image: "/classicKazakhstan/green-zing.webp",
    price: 89,
    cutPrice: 120,
  },
  // Add more products as needed...
];

// Required for static generation of dynamic pages
export async function generateStaticParams() {
  return productData.map((product) => ({
    slug: product.slug,
  }));
}

// Page component receives slug param
export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = productData.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="rounded shadow mb-6"
      />
      <p className="text-lg mb-2">
        <strong>Flavour:</strong> {product.flavour}
      </p>
      <p className="mb-4">{product.description}</p>
      <p>
        <span className="text-green-600 font-bold text-xl">AED {product.price}</span>
        <span className="text-gray-500 line-through ml-2">AED {product.cutPrice}</span>
      </p>
    </div>
  );
}
