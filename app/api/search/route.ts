import { NextRequest, NextResponse } from 'next/server';
import products from '../../(components)/data/products';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q')?.toLowerCase().trim();

    if (!query || query.length < 2) {
      return NextResponse.json([]);
    }

    // Search through products
    const results = products
      .filter((product) => {
        const searchText = `${product.title} ${product.brand} ${product.flavour} ${product.description}`.toLowerCase();
        return searchText.includes(query);
      })
      .map((product) => ({
        id: product.slug,
        title: product.title,
        url: `/products/${product.slug}`,
        image: product.image,
        price: product.price,
        badge: product.price > 400 ? 'premium' : product.price < 100 ? 'budget' : undefined
      }))
      .slice(0, 8); // Limit to 8 results for performance

    return NextResponse.json(results);
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json([], { status: 500 });
  }
}
