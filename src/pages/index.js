import CrossbodyBags from "@/Component/Category/CrossBodyBag";
import Header from "@/Component/Header/Header";
import RootLayout from "@/Component/Layout/RootLayout";
import Spinner from "@/Component/Loader/Loader";
import SocialIconsContainer from "@/Component/SocialIcon/IconContainer";

import SupportUs from "@/Component/Support/SupportUs";
import ClientReview from "@/Screen/ClieentReview/ClientReview";
import DiscountPopup from "@/Screen/DiscountPopUp/DiscountPopUp";
import TouchSection from "@/Screen/Touch/TouchSection";
import BestProductList from "@/Screen/product/BestProduct/BestProductList";
import ProductList from "@/Screen/product/ProductList";
import dynamic from "next/dynamic";
import React from "react";

const HomeScreen = () => {
  const DynamicSpinner = dynamic(() => import("@/Component/Support/SupportUs"), {
    loading: () =><Spinner />,
    ssr: false,
  });

  return (
    <div>
      <Header />
      <SocialIconsContainer></SocialIconsContainer>
      <div className="HomeContainer">
      <BestProductList />
      <ProductList />
      <CrossbodyBags />
      <ClientReview />
      <TouchSection />
      <DynamicSpinner />
      </div>
      <DiscountPopup />
    </div>
  );
};

export default HomeScreen;

HomeScreen.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
