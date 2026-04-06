import BestDeals from "@/components/modules/BestDeals/BestDeals";
import ShopByCategory from "@/components/modules/Category/CategorySection";
import CustomerFavorites from "@/components/modules/CustomerFavorites/FavoritesSection";
import FeaturesSection from "@/components/modules/Features/FeaturesSection";
import HeroSection from "@/components/modules/HomePage/HeroSection";
import CustomerTestimonials from "@/components/modules/Testimonials/Testimonials";
import TrustHeroBanner from "@/components/modules/Trust/TrustSection";
import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <HeroSection />
      <ShopByCategory />
      <CustomerFavorites />
      <TrustHeroBanner />
      <BestDeals />
      <CustomerTestimonials />
      <FeaturesSection />
    </main>
  );
};

export default HomePage;
