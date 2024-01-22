import CrossbodyBags from "@/Component/Category/CrossBodyBag";
import Header from "@/Component/Header/Header";
import RootLayout from "@/Component/Layout/RootLayout";
import Spinner from "@/Component/Loader/Loader";
import MessengerChat from "@/Component/Messenger/MessengerChat";
import SocialIconsContainer from "@/Component/SocialIcon/IconContainer";

import SupportUs from "@/Component/Support/SupportUs";
import WholeSaleBanner from "@/Component/WholeSale/banner";
import DiscountPopup from "@/Screen/DiscountPopUp/DiscountPopUp";
import TouchSection from "@/Screen/Touch/TouchSection";
import BestProductList from "@/Screen/product/BestProduct/BestProductList";
import ProductList from "@/Screen/product/ProductList";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
const HomeScreen = () => {
  const DynamicSpinner = dynamic(() => import("@/Component/Support/SupportUs"), {
    loading: () =><Spinner />,
    ssr: false,
  });
  
  

    // useEffect(() => {
    //   const handleBeforeUnload = () => {
    //     localStorage.removeItem('User');
    //     localStorage.removeItem('BgAdmin');
    //   };
  
    //   // Add the beforeunload event listener
    //   window.addEventListener('beforeunload', handleBeforeUnload);
  
    //   // Remove the event listener when the component is unmounted
    //   return () => {
    //     window.removeEventListener('beforeunload', handleBeforeUnload);
    //   };
    // }, []);

  return (
    <div>
      <Header />
      <MessengerChat />
      <div className="HomeContainer">
      <BestProductList />
      <ProductList />
      {/* <CrossbodyBags /> */}
      <TouchSection />
      <WholeSaleBanner />
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
