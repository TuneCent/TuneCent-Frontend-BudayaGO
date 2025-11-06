"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Heart, Star } from "react-feather";

interface Product {
  id: number;
  name: string;
  artist: string;
  category: "Apparel" | "Physical Album" | "NFT" | "Accessories";
  price: number;
  image: string;
  rating: number;
  stock: number;
  limited?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "T-Shirt Rayuan Pulau Kelapa",
    artist: "Ismail Marzuki",
    category: "Apparel",
    price: 150000,
    image: "https://i.scdn.co/image/ab67616d00001e0210df7b8e9b3ed2588888a8ae",
    rating: 4.8,
    stock: 25,
  },
  {
    id: 2,
    name: "Album Vinyl - Nusantara Symphony",
    artist: "Various Artists",
    category: "Physical Album",
    price: 350000,
    image: "https://i.scdn.co/image/ab67616d00001e024d265eb3c717ab45470fdc8c",
    rating: 5.0,
    stock: 10,
    limited: true,
  },
  {
    id: 3,
    name: "NFT Collectible - Gamelan Digital Art",
    artist: "Tenxi",
    category: "NFT",
    price: 500000,
    image: "https://i.scdn.co/image/ab67616d00001e0292aaadd0be503d89c082ecbb",
    rating: 4.9,
    stock: 5,
    limited: true,
  },
  {
    id: 4,
    name: "Poster Bengawan Solo",
    artist: "Gesang",
    category: "Accessories",
    price: 75000,
    image: "https://i.scdn.co/image/ab67616d00001e0201b9750a33d771645d7f043a",
    rating: 4.5,
    stock: 50,
  },
  {
    id: 5,
    name: "Photocard Set - Indonesian Legends",
    artist: "Various",
    category: "Accessories",
    price: 120000,
    image: "https://i.scdn.co/image/ab67616d00001e0210df7b8e9b3ed2588888a8ae",
    rating: 4.7,
    stock: 30,
  },
  {
    id: 6,
    name: "Hoodie Limited Edition",
    artist: "Perunggu",
    category: "Apparel",
    price: 275000,
    image: "https://i.scdn.co/image/ab67616d00001e0292aaadd0be503d89c082ecbb",
    rating: 4.9,
    stock: 15,
    limited: true,
  },
];

export default function MarketplacePage() {
  const [cart, setCart] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Apparel", "Physical Album", "NFT", "Accessories"];

  const addToCart = (productId: number) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId]);
      alert("Produk ditambahkan ke keranjang!");
    } else {
      alert("Produk sudah ada di keranjang");
    }
  };

  const toggleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const cartTotal = cart.reduce((total, productId) => {
    const product = products.find((p) => p.id === productId);
    return total + (product?.price || 0);
  }, 0);

  return (
    <section className="w-full flex flex-col bg-black gap-[2.222vw] relative">
      {/* Header */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-[0.556vw]">
          <h1 className="font-jakarta font-bold text-[2.222vw] text-[var(--color-emas-nusantara)]">
            Marketplace
          </h1>
          <p className="font-jakarta text-[1.111vw] text-[var(--color-krem-lontar)]">
            Belanja merchandise resmi dari artis favorit Anda
          </p>
        </div>

        {/* Shopping Cart */}
        <div className="relative">
          <button 
            aria-label="Keranjang Belanja"
            className="bg-[var(--color-coklat-jati)] hover:bg-[var(--color-emas-nusantara)] transition-colors rounded-full p-[0.833vw]">
            <ShoppingCart size={24} className="text-white" />
          </button>
          {cart.length > 0 && (
            <div className="absolute -top-2 -right-2 bg-[var(--color-merah-kebangsaan)] text-white rounded-full w-[1.389vw] h-[1.389vw] flex items-center justify-center">
              <span className="font-jakarta text-[0.694vw] font-bold">
                {cart.length}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Gorga Divider */}
      <div className="divider-gorga w-full my-2" />

      {/* Category Filter */}
      <div className="flex flex-row gap-[1.111vw]">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-[1.667vw] py-[0.556vw] rounded-full font-jakarta text-[0.833vw] font-medium transition-all ${
              selectedCategory === category
                ? "bg-gradient-to-r from-[var(--color-merah-kebangsaan)] to-[var(--color-emas-nusantara)] text-white"
                : "bg-[var(--color-coklat-jati)]/30 text-[var(--color-krem-lontar)] hover:bg-[var(--color-coklat-jati)]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-3 gap-[1.667vw]">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-neutral-black-base rounded-[1.111vw] overflow-hidden border border-[var(--color-coklat-jati)] hover:border-[var(--color-emas-nusantara)] transition-all hover:scale-105"
          >
            {/* Product Image */}
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.limited && (
                <div className="absolute top-2 right-2 bg-[var(--color-merah-kebangsaan)] text-white px-[0.833vw] py-[0.278vw] rounded-full font-jakarta text-[0.694vw] font-bold">
                  LIMITED
                </div>
              )}
              <button
                onClick={() => toggleFavorite(product.id)}
                aria-label={favorites.includes(product.id) ? "Hapus dari favorit" : "Tambah ke favorit"}
                className="absolute top-2 left-2 bg-black/50 hover:bg-black/70 rounded-full p-[0.556vw] transition-colors"
              >
                <Heart
                  size={20}
                  className={
                    favorites.includes(product.id)
                      ? "text-[var(--color-merah-kebangsaan)] fill-current"
                      : "text-white"
                  }
                />
              </button>
            </div>

            {/* Product Info */}
            <div className="p-[1.111vw] flex flex-col gap-[0.833vw]">
              <div>
                <h3 className="font-jakarta font-bold text-[1.111vw] text-white line-clamp-1">
                  {product.name}
                </h3>
                <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]/70">
                  {product.artist}
                </p>
              </div>

              <div className="flex flex-row items-center gap-[0.278vw]">
                <Star size={16} className="text-[var(--color-emas-nusantara)] fill-current" />
                <span className="font-jakarta text-[0.833vw] text-white">
                  {product.rating}
                </span>
                <span className="font-jakarta text-[0.722vw] text-[var(--color-krem-lontar)]/50">
                  ({product.stock} tersedia)
                </span>
              </div>

              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-jakarta font-bold text-[1.389vw] text-[var(--color-emas-nusantara)]">
                    Rp {(product.price / 1000).toFixed(0)}k
                  </span>
                  <span className="font-jakarta text-[0.694vw] text-[var(--color-krem-lontar)]/50">
                    {product.category}
                  </span>
                </div>
                <button
                  onClick={() => addToCart(product.id)}
                  className="bg-gradient-to-r from-[var(--color-merah-kebangsaan)] to-[var(--color-emas-nusantara)] text-white px-[1.111vw] py-[0.556vw] rounded-[0.556vw] font-jakarta text-[0.833vw] font-bold hover:scale-105 transition-transform"
                >
                  Beli
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <>
          <div className="divider-gorga w-full my-2" />
          <div className="bg-neutral-black-base rounded-[1.111vw] p-[1.667vw] border-2 border-[var(--color-emas-nusantara)]">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-[0.278vw]">
                <h3 className="font-jakarta font-bold text-[1.389vw] text-white">
                  Keranjang Belanja
                </h3>
                <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]/70">
                  {cart.length} item di keranjang
                </p>
              </div>
              <div className="flex flex-row items-center gap-[1.667vw]">
                <div className="text-right">
                  <p className="font-jakarta text-[0.833vw] text-[var(--color-krem-lontar)]/70">
                    Total
                  </p>
                  <p className="font-jakarta font-bold text-[1.667vw] text-[var(--color-emas-nusantara)]">
                    Rp {(cartTotal / 1000).toFixed(0)}k
                  </p>
                </div>
                <button
                  onClick={() => alert("Checkout! (Prototype Mode - No Payment Required)")}
                  className="bg-gradient-to-r from-[var(--color-merah-kebangsaan)] to-[var(--color-emas-nusantara)] text-white px-[2.222vw] py-[0.833vw] rounded-[0.556vw] font-jakarta text-[1.111vw] font-bold hover:scale-105 transition-transform"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
