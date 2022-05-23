/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React from "react";
import Header from "./Header";
import Features from "./Features";
import Footer from "./Footer";
import Products from "./Products";
import items from "../vendor/dataBase";
import Categories from "./Categories";
import PopupBigImg from "./PopupBigImg";
import Notification from "./Notification";

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
  const [currentItems, setCurrentItems] = React.useState([...items]);
  let [onBigImg, setOnBigImg] = React.useState(false);
  const [bigImg, setBigImg] = React.useState({});
  const [notification, setNotification] = React.useState(false);

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
      setCurrentItems([...items]);
      return;
    }

    setCurrentItems(items.filter((el) => el.category === category.key));
  }

  function onNotification(){
    setNotification(true);

    const timer = setTimeout(() => {
      setNotification(false);
    }, 2000);
    return () => clearTimeout(timer);
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
      <Features />
      <Categories categories={categories} onCategory={chooseCategory} />
      <Products items={currentItems} onAdd={addToOrder} onBigImg={openBigImg} onNotification={onNotification}/>

      {onBigImg && <PopupBigImg item={bigImg} onBigImg={openBigImg} />}
      {notification && <Notification />}

      <Footer />
    </div>
  );
}

export default App;
