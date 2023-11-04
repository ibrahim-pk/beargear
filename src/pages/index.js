import Header from "@/Component/Header/Header";
import RootLayout from "@/Component/Layout/RootLayout";
import SocialIconsContainer from "@/Component/SocialIcon/IconContainer";

import SupportUs from "@/Component/Support/SupportUs";
import ClientReview from "@/Screen/ClieentReview/ClientReview";
import TouchSection from "@/Screen/Touch/TouchSection";
import BestProductList from "@/Screen/product/BestProduct/BestProductList";
import ProductList from "@/Screen/product/ProductList";
import React from "react";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <SocialIconsContainer></SocialIconsContainer>
      <BestProductList />
      <ProductList />
      <ClientReview />
      <TouchSection />
      <SupportUs />
    </div>
  );
};

export default HomeScreen;

HomeScreen.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
