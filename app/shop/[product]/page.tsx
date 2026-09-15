import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PRODUCTS, ProductKey } from "@/lib/data";
import ProductDetailClient from "@/components/ProductDetailClient";

export function generateStaticParams() {
  return Object.keys(PRODUCTS).map((product) => ({ product }));
}

export async function generateMetadata({ params }: { params: Promise<{ product: string }> }): Promise<Metadata> {
  const { product } = await params;
  const p = PRODUCTS[product as ProductKey];
  if (!p) return {};
  return {
    title: `${p.name} 250ml — MiteXpert Dust Allergy Relief Spray`,
    description: p.body,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ product: string }> }) {
  const { product } = await params;
  if (!(product in PRODUCTS)) notFound();
  return <ProductDetailClient productKey={product as ProductKey} />;
}
