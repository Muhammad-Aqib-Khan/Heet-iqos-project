// app/iqostereakazakhstan/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";

// Mock product data
const productData = [
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
];

// Define expected prop types for this dynamic route
type PageProps = {
  params: {
    slug: string;
  };
};

// This is the correct component format for `[slug]` dynamic routes in Next.js App Router
export default function ProductDetailPage({ params }: PageProps) {
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

// Required for static generation of dynamic route
export async function generateStaticParams() {
  return productData.map((product) => ({
    slug: product.slug,
  }));
}
