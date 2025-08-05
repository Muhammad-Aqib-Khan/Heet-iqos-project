// app/products/[slug]/page.tsx
import Image from "next/image";
import products from "@/app/(components)/data/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <Image src={product.image} alt={product.title} width={500} height={500} />
      <p className="text-xl text-red-600 mb-2">AED {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
