/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PopupBigImg from "./PopupBigImg";
import Notification from "./Notification";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import Cabinet from "./Cabinet";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router-dom";
import api from "../utils/api";
import Login from "./Login";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [order, setOrder] = React.useState([]);
  const [categories, setCategories] = React.useState([
    {
      key: "all",
      name: "All",
    },
    {
      key: "chairs",
      name: "Chairs",
    },
    {
      key: "tables",
      name: "Tables",
    },
    {
      key: "sofa",
      name: "Sofas",
    },
    {
      key: "light",
      name: "Light",
    },
  ]);
  const [isChoose, setIsChoose] = React.useState("all");
  let [onBigImg, setOnBigImg] = React.useState(false);
  const [bigImg, setBigImg] = React.useState({});
  const [notification, setNotification] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [currentItems, setCurrentItems] = React.useState([]);


  // function-----------------------------------

  function open() {
    setIsOpen(!isOpen);
  }

  function openBigImg(item) {
    setOnBigImg((onBigImg = !onBigImg));
    setBigImg(item);
  }

  function close(e) {
    setIsOpen(false);
  }

  function deleteOrder(id) {
    setOrder(order.filter((el) => el.id !== id));
  }

  function deleteAllProducts() {
    setOrder([]);
  }

  function addToOrder(item) {
    let isInArray = false;
    order.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setOrder([...order, item]);
    }
  }

  function chooseCategory(category) {
    if (category.key === "all") {
      setCurrentItems([...products]);
      return;
    }

    setCurrentItems(products.filter((el) => el.category === category.key));
  }

  function onNotification() {
    setNotification(true);

    const timer = setTimeout(() => {
      setNotification(false);
    }, 2000);
    return () => clearTimeout(timer);
  }

  function choose(el) {
    setIsChoose(el.key);
  }

  function getProducts() {
    api.getProducts()
    .then((res) => {
      setProducts(res);
      setCurrentItems(res);
    })
    .then(console.log(products))
    .catch(err => console.log(err))
  }

  function addProducts(title, img, desc, category, price) {

    api.addProdustc(title, img, desc, category, price)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  // hooks usage--------------------------------

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, []);

  React.useEffect(() => {
    const handler = (e) => {
      if (
        !e.target.className.includes("basket") &&
        !e.target.className.includes("header__button") &&
        !e.target.className.includes("order__deleteButton") &&
        !e.target.className.includes("order")
      ) {
        close();
      }
    };
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  React.useEffect(() => {
    getProducts();
  }, [])

  // render--------------------------------------

  return (
    <div className="root">
      <Header
        open={open}
        isOpen={isOpen}
        order={order}
        onDelete={deleteOrder}
        onDeleteAll={deleteAllProducts}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              categories={categories}
              onCategory={chooseCategory}
              choose={choose}
              isChoose={isChoose}
              onAdd={addToOrder}
              onBigImg={openBigImg}
              onNotification={onNotification}
              products={currentItems}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/cabinet" element={<Cabinet addProducts={addProducts} />} />
        <Route path="/admin_login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {onBigImg && <PopupBigImg item={bigImg} onBigImg={openBigImg} />}
      {notification && <Notification />}

      <Footer />
    </div>
  );
}

export default App;
