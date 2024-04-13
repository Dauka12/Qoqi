import React, { useState, useEffect } from "react";
import {
  useDocumentTitle,
  useFeaturedProducts,
  useRecommendedProducts,
  useScrollTop,
} from "@/hooks";
import { ProductShowcaseGrid, ProductGrid } from "../../../components/product";
import { MessageDisplay } from "@/components/common";
// Just add this feature if you want :P

const UserOrdersTab = () => {

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useFeaturedProducts(100);

  return(
  <div className="loader" style={{ minHeight: '80vh' }}>
    <h3>Мои работы</h3>
    <ProductGrid products={featuredProducts} />
    <strong><span className="text-subtle">У вас нет работ</span></strong>
  </div>
  );
};

export default UserOrdersTab;
