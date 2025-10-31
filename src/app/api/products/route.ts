// src/app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const location = searchParams.get('location');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');

  // Mock data - in real app, this would come from your database
  const products = [
    {
      id: '1',
      name: 'Premium Rice (50kg bags)',
      category: 'Grains',
      location: 'Lagos',
      price: 35000,
      groupPrice: 28000,
      minOrder: 10,
      rating: 4.8,
      seller: 'Lagos Farmers Cooperative'
    },
    // ... more products
  ];

  // Filter products based on query parameters
  let filteredProducts = products;

  if (category) {
    filteredProducts = filteredProducts.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (location) {
    filteredProducts = filteredProducts.filter(p => 
      p.location.toLowerCase() === location.toLowerCase()
    );
  }

  if (minPrice) {
    filteredProducts = filteredProducts.filter(p => 
      p.groupPrice >= parseInt(minPrice)
    );
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter(p => 
      p.groupPrice <= parseInt(maxPrice)
    );
  }

  return NextResponse.json({
    products: filteredProducts,
    total: filteredProducts.length,
    page: 1,
    totalPages: Math.ceil(filteredProducts.length / 10)
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const required = ['name', 'category', 'price', 'groupPrice', 'minOrder', 'location'];
    const missing = required.filter(field => !body[field]);
    
    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      );
    }

    // In real app, save to database
    const newProduct = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      rating: 0,
      reviewCount: 0
    };

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}