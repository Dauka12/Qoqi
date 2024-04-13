import { ArrowRightOutlined, ConsoleSqlOutlined } from "@ant-design/icons";
import { MessageDisplay } from "@/components/common";
import { ProductShowcaseGrid } from "@/components/product";
import {
  FEATURED_PRODUCTS,
  RECOMMENDED_PRODUCTS,
  SHOP,
} from "@/constants/routes";
import {
  useDocumentTitle,
  useFeaturedProducts,
  useRecommendedProducts,
  useScrollTop,
} from "@/hooks";
import bannerImg from "@/images/banner-girl.png";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { selectFilter } from "@/selectors/selector";
import { selectFilterEvents } from "@/selectors/selectorEvent";
import { AppliedFilters, ProductGrid, ProductList } from "@/components/product";
import {
  EventAppliedFilters,
  EventGrid,
  EventList,
} from "@/components/eventss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { applyFilter } from "../../redux/actions/filterActions";
import { applyFilterEvents } from "../../redux/actions/filterEventActions";
import Carousel from "react-grid-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Firebase from "../../services/firebase";

const Home = () => {
  const navbar = useRef(null);
  useDocumentTitle("Qoqiqaz | Home");
  useScrollTop();
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [activeButton, setActiveButton] = useState("");
  const [isFixed, setIsFixed] = useState(false);
  const [value, setValue] = React.useState(0);
  const [rect, setRect] = useState(false);
  const [pop, setPop] = useState(false);
  const [res, setRes] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useFeaturedProducts(100);

  const toggleRect = () => {
    setRect(true);
    setPop(false);
    setRes(false);
  };

  const togglePop = () => {
    setRect(false);
    setPop(true);
    setRes(false);
  };

  const toggleRes = () => {
    setRect(false);
    setPop(false);
    setRes(true);
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    dispatch(applyFilter({ brand }));
    setActiveButton(brand);
  };

  const store = useSelector(
    (state) => ({
      filteredProducts: selectFilter(state.products.items, state.filter),
      products: state.products,
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading,
    }),
    shallowEqual
  );

  const store2 = useSelector(
    (state) => ({
      filteredEvents: selectFilterEvents(state.events.items, state.filter),
      events: state.events,
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading,
    }),
    shallowEqual
  );

  // Function to handle scroll event
  const handleScroll = () => {
    if (navbar.current && window.screen.width > 480) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add("is-menu-scrolled");
      } else {
        navbar.current.classList.remove("is-menu-scrolled");
      }
    }
  };

  useEffect(() => {
    toggleRect();
    window.addEventListener("scroll", handleScroll);
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const { events } = await Firebase.getEvents();
        setEvents(events);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [Firebase]);

  return (
    <main className="content">
      <div className="home" style={{ marginTop: "3rem" }}>
        <h2 style={{ marginLeft: "2rem" }}>Мероприятия</h2>

        <Carousel cols={3} rows={1} gap={10} loop scrollSnap={true}>
          {events.map((event, index) => (
            <Carousel.Item key={index}>
              <EventGrid events={[event]} />
            </Carousel.Item>
          ))}
        </Carousel>

        <div style={{ marginLeft: "2rem" }}>
          <h2>Галерея лучших работ</h2>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Button
              className={
                activeButton === "" ? "filter-buttons-active" : "filter-buttons"
              }
              onClick={() => handleBrandSelect("")}
            >
              Все категории
            </Button>
            <Button
              className={
                activeButton === "фотографии"
                  ? "filter-buttons-active"
                  : "filter-buttons"
              }
              onClick={() => handleBrandSelect("фотографии")}
            >
              Фотографии
            </Button>
            <Button
              className={
                activeButton === "музыка"
                  ? "filter-buttons-active"
                  : "filter-buttons"
              }
              onClick={() => handleBrandSelect("музыка")}
            >
              Музыка
            </Button>
            <Button
              className={
                activeButton === "дизайн"
                  ? "filter-buttons-active"
                  : "filter-buttons"
              }
              onClick={() => handleBrandSelect("дизайн")}
            >
              Дизайн
            </Button>
            <Button
              className={
                activeButton === "иллюстрации"
                  ? "filter-buttons-active"
                  : "filter-buttons"
              }
              onClick={() => handleBrandSelect("иллюстрации")}
            >
              Иллюстрации
            </Button>
            <Button
              className={
                activeButton === "анимации"
                  ? "filter-buttons-active"
                  : "filter-buttons"
              }
              onClick={() => handleBrandSelect("анимации")}
            >
              Анимации
            </Button>
            <Button
              className={
                activeButton === "инсталяции"
                  ? "filter-buttons-active"
                  : "filter-buttons"
              }
              onClick={() => handleBrandSelect("инсталяции")}
            >
              Инсталяции
            </Button>
            <Button
              className={
                activeButton === "3D"
                  ? "filter-buttons-active"
                  : "filter-buttons"
              }
              onClick={() => handleBrandSelect("3D")}
            >
              3D
            </Button>
          </div>
        </div>
        <br />

        <ProductList {...store}>
          <div className="scrollable-carousel">
            <Carousel scrollSnap={true} cols={3} rows={2} gap={2} loop>
              {store.filteredProducts
                .filter(
                  (product) =>
                    !featuredProducts.some((fp) => fp.id === product.id)
                )
                .map((product, index) => (
                  <Carousel.Item key={index}>
                    <ProductShowcaseGrid products={[product]} />
                  </Carousel.Item>
                ))}
            </Carousel>
          </div>
        </ProductList>
        <Box
          sx={{
            background: "white",
            wifth: "15rem",
            justifyContent: "center",
            alignItems: "center",
            height: "5rem",
          }}
          style={{ borderRadius: "10rem" }}
          ref={navbar}
        >
          <div
            style={{
              borderRadius: "10rem",
              // border: "1px solid",
              backgroundColor: "white",
              height: "4rem",
              // marginTop:"7%",
              // justifyContent: "center",
            }}
          >
            <Button
              onClick={toggleRect}
              style={{
                backgroundColor: rect ? "black" : "white",
                borderRadius: "10rem",
                color: rect ? "white" : "black",
                border: "none",
                height: "4rem",
              }}
            >
              Рекомендации
            </Button>
            <Button
              onClick={togglePop}
              style={{
                backgroundColor: pop ? "black" : "white",
                borderRadius: "10rem",
                color: pop ? "white" : "black",
                border: "none",
                height: "4rem",
              }}
            >
              Популярное
            </Button>
            <Button
              onClick={toggleRes}
              style={{
                backgroundColor: res ? "black" : "white",
                borderRadius: "10rem",
                color: res ? "white" : "black",
                border: "none",
                height: "4rem",
              }}
            >
              Недавние
            </Button>
          </div>
        </Box>

        <h2 style={{ marginLeft: "2rem" }}>Лучшее за неделю</h2>
        <ProductList {...store}>
          <div className="scrollable-carousel">
            <Carousel scrollSnap={true} cols={2} rows={1} gap={10} loop>
              {store.filteredProducts
                .filter(
                  (product) =>
                    !featuredProducts.some((fp) => fp.id === product.id)
                )
                .map((product, index) => (
                  <Carousel.Item key={index}>
                    <ProductShowcaseGrid products={[product]} />
                  </Carousel.Item>
                ))}
            </Carousel>
          </div>
        </ProductList>
      </div>
    </main>
  );
};

export default Home;
