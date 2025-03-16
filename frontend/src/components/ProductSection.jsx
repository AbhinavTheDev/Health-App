import React from "react";
import { Button } from "../../src/components/ui/button";
import { Heart, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
const products = [
  {
    id: 1,
    name: "Tranquil Mind",
    description: "Herbal supplement blend for stress relief and mental clarity",
    price: "$29.99",
    rating: 4.8,
    category: "Supplements",
  },
  {
    id: 2,
    name: "Radiant Skin Elixir",
    description: "Ayurvedic facial oil with science-backed active ingredients",
    price: "$45.99",
    rating: 4.9,
    category: "Skincare",
  },
  {
    id: 3,
    name: "Digestive Harmony",
    description: "Balanced formula for optimal gut health and digestion",
    price: "$32.99",
    rating: 4.7,
    category: "Supplements",
  },
];

const ProductSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-700">
            Personalized Product Shop
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover products tailored to your unique constitution and needs,
            formulated with the perfect blend of ancient herbs and modern
            science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 bg-gradient-to-r from-green-200 to-green-900 flex items-center justify-center">
                <img
                  src="/main-page.png"
                  alt="Ayurvedic ingredients and mortar"
                  className="inset-0 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-gray-900">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-gray-900 mr-1 fill-current" />
                    <span className="text-sm text-gray-600">
                      {product.rating}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-ayurveda-dark">
                  {product.name}
                </h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-ayurveda-dark">
                    {product.price}
                  </span>
                  <Button className="bg-teal-500 text-white hover:bg-ayurveda-dark transition-colors duration-300 text-sm">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button className="bg-green-600 text-white hover:bg-ayurveda-medium transition-colors duration-300">
            <NavLink to="/ecommerce">View All Products</NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
