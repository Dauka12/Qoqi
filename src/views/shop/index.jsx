/* eslint-disable react/jsx-props-no-spreading */
import { AppliedFilters, ProductGrid, ProductList } from "@/components/product";
import {
  useDocumentTitle,
  useFeaturedProducts,
  useRecommendedProducts,
  useScrollTop,
} from "@/hooks";
import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { selectFilter } from "@/selectors/selector";
import Button from "react-bootstrap/Button";
import Creators from "../../components/creator/Creators";
import Vacancies from "../../components/jobs/Vacancies";
import Tender from "../../components/tender/Tender";
import Croud from "../../components/croud/Croud";
import Charity from "../../components/charity/Charity";
import MasterForm from "../../components/order/MasterForm";
import { ProductShowcaseGrid } from "../../components/product";
import { MessageDisplay } from "@/components/common";
import { FEATURED_PRODUCTS } from "@/constants/routes";
import { Link } from "react-router-dom";

const Shop = () => {
  useDocumentTitle("Shop | Qoqiqaz");
  useScrollTop();

  const [art, setArt] = useState(false);
  const [creator, setCreator] = useState(false);
  const [vac, setVac] = useState(false);
  const [order, setOrder] = useState(false);
  const [tender, setTender] = useState(false);
  const [croud, setCroud] = useState(false);
  const [charity, setCharity] = useState(false);

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useFeaturedProducts(100);

  const toggleArt = () => {
    setArt(true);
    setCreator(false);
    setVac(false);
    setOrder(false);
    setTender(false);
    setCroud(false);
    setCharity(false);
  };
  const toggleCreator = () => {
    setArt(false);
    setCreator(true);
    setVac(false);
    setOrder(false);
    setTender(false);
    setCroud(false);
    setCharity(false);
  };
  const toggleVac = () => {
    setArt(false);
    setCreator(false);
    setVac(true);
    setOrder(false);
    setTender(false);
    setCroud(false);
    setCharity(false);
  };
  const toggleOrder = () => {
    setArt(false);
    setCreator(false);
    setVac(false);
    setOrder(true);
    setTender(false);
    setCroud(false);
    setCharity(false);
  };
  const toggleTender = () => {
    setArt(false);
    setCreator(false);
    setVac(false);
    setOrder(false);
    setTender(true);
    setCroud(false);
    setCharity(false);
  };
  const toggleCroud = () => {
    setArt(false);
    setCreator(false);
    setVac(false);
    setOrder(false);
    setTender(false);
    setCroud(true);
    setCharity(false);
  };
  const toggleCharity = () => {
    setArt(false);
    setCreator(false);
    setVac(false);
    setOrder(false);
    setTender(false);
    setCroud(false);
    setCharity(true);
  };

  useEffect(() => {
    // Ensure that the first button is clicked when the page is just opened
    toggleArt();
  }, []);

  const store = useSelector(
    (state) => ({
      filteredProducts: selectFilter(state.products.items, state.filter),
      products: state.products,
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading,
    }),
    shallowEqual
  );

  return (
    <main className="content" style={{ marginTop: "3rem" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {art && (
          <h2 style={{ marginLeft: "2rem", height: "20%" }}>Маркетплейс</h2>
        )}
        {creator && (
          <h2 style={{ marginLeft: "2rem", height: "20%" }}>Найти креатора</h2>
        )}
        {vac && <h2 style={{ marginLeft: "2rem", height: "20%" }}>Вакансии</h2>}
        {order && (
          <h2 style={{ marginLeft: "2rem", height: "20%" }}>
            Разместить заказ
          </h2>
        )}
        {tender && (
          <h2 style={{ marginLeft: "2rem", height: "20%" }}>
            Конкурсы/тендеры
          </h2>
        )}
        {croud && (
          <h2 style={{ marginLeft: "2rem", height: "20%" }}>Краудсорсинг</h2>
        )}
        {charity && (
          <h2 style={{ marginLeft: "2rem", height: "20%" }}>
            Благотворительность
          </h2>
        )}

        <section className="product-list-wrapper">
          <div
            style={{
              display: "flex",
              marginBottom: "4rem",
              marginLeft: "1.5rem",
            }}
          >
            <Button
              onClick={toggleArt}
              style={{
                backgroundColor: art ? "#F28290" : "white",
                color: art ? "white" : "black",
                border: art ? "none" : "1px solid black",
                borderRadius: "12px",
                marginLeft: "0.5rem",
                width: "15rem",
                height: "4rem",
              }}
            >
              Купить работу
            </Button>
            <Button
              onClick={toggleCreator}
              style={{
                backgroundColor: creator ? "#F28290" : "white",
                color: creator ? "white" : "black",
                border: creator ? "none" : "1px solid black",
                borderRadius: "12px",
                marginLeft: "0.5rem",
                width: "15rem",
                height: "4rem",
              }}
            >
              Найти креатора
            </Button>
            <Button
              onClick={toggleVac}
              style={{
                backgroundColor: vac ? "#F28290" : "white",
                color: vac ? "white" : "black",
                border: vac ? "none" : "1px solid black",
                borderRadius: "12px",
                marginLeft: "0.5rem",
                width: "12rem",
                height: "4rem",
              }}
            >
              Вакансии
            </Button>
            <Button
              onClick={toggleOrder}
              style={{
                backgroundColor: order ? "#F28290" : "white",
                color: order ? "white" : "black",
                border: order ? "none" : "1px solid black",
                borderRadius: "12px",
                marginLeft: "0.5rem",
                width: "18rem",
                height: "4rem",
              }}
            >
              Разместить заказ
            </Button>
            <Button
              onClick={toggleTender}
              style={{
                backgroundColor: tender ? "#F28290" : "white",
                color: tender ? "white" : "black",
                border: tender ? "none" : "1px solid black",
                borderRadius: "12px",
                width: "18rem",
                height: "4rem",
                marginLeft: "0.5rem",
              }}
            >
              Конкурсы/тендеры
            </Button>
            <Button
              onClick={toggleCroud}
              style={{
                backgroundColor: croud ? "#F28290" : "white",
                color: croud ? "white" : "black",
                border: croud ? "none" : "1px solid black",
                borderRadius: "12px",
                marginLeft: "0.5rem",
                width: "12rem",
                height: "4rem",
              }}
            >
              Краудсорсинг
            </Button>
            <Button
              onClick={toggleCharity}
              style={{
                backgroundColor: charity ? "#F28290" : "white",
                color: charity ? "white" : "black",
                border: charity ? "none" : "1px solid black",
                borderRadius: "12px",
                marginLeft: "0.5rem",
                width: "20rem",
                height: "4rem",
              }}
            >
              Благотворительность
            </Button>
          </div>
          {/* <AppliedFilters
            filteredProductsCount={store.filteredProducts.length}
          /> */}
          {art && (
            // <ProductList {...store}>
            <ProductGrid products={featuredProducts} />
            // </ProductList>
          )}

          {creator && <Creators />}
          {vac && <Vacancies />}
          {order && <MasterForm />}
          {tender && <Tender />}
          {croud && <Croud />}
          {charity && <Charity />}
        </section>
      </div>
    </main>
  );
};

export default Shop;
