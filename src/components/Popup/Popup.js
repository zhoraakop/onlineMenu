import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Popup = ({ open, click }) => {
  const location = useLocation();
  const isBarPage = location.pathname === "/bar";
  const page = () => {
    if (location.pathname === "/bar") {
      return (
        <div
          className={
            open
              ? "popup__menu popup__menu_white popup_opened"
              : "popup__menu popup__menu_white"
          }
        >
          <button
            className="popup__button popup__button_black"
            onClick={click}
          ></button>
          <ul className="popup__list">
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#shot"
              >
                Настойки
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#beer"
              >
                Пиво
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#cider"
              >
                Сидр
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#cocktail"
              >
                Коктейли
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#brandy"
              >
                Бренди и коньяк
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#whiskey"
              >
                Виски
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#rum"
              >
                Ром
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#gin"
              >
                Джин
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#whiteWine"
              >
                Белые вина
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#redWine"
              >
                красные вина
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#pinkWine"
              >
                Розовые вина
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#sparklingWine"
              >
                Игристые вина
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#soju"
              >
                Соджу
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#vodka"
              >
                Водка
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#vermut"
              >
                Вермут
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#coffee"
              >
                Кофе и не только
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#lemonade"
              >
                Лимонады
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#iceTea"
              >
                Холодный чай
              </a>
            </li>
            <li className="popup__food">
              <a
                onClick={click}
                className="popup__link popup__link_black"
                href="#naDrink"
              >
                б/а напитки
              </a>
            </li>
            <li className="popup__food">
              <Link className="popup__link popup__link_black" to="/">
                .
              </Link>
            </li>
            <li className="popup__food">
              <Link
                onClick={click}
                className="popup__link popup__link_black"
                to="/"
              >
                Меню бара
              </Link>
            </li>
            <li className="popup__food">
              <Link className="popup__link popup__link_black" to="/">
                .
              </Link>
            </li>
            <li className="popup__food">
              <Link onClick={click} className="popup__link popup__link_black" to="/lunch">
                Обеды
              </Link>
            </li>
          </ul>
        </div>
      );
    }
    if (location.pathname === "/lunch") {
        return (<div className={open ? "popup__menu popup_opened" : "popup__menu"}>
          <button className="popup__button popup__button_pink" onClick={click}></button>
          <ul className="popup__list">
            
            <li className="popup__food">
              <Link className="popup__link" to="/">
                .
              </Link>
            </li>
            <li className="popup__food">
              <Link onClick={click} className="popup__link" to="/">
                 Меню бара
              </Link>
            </li>
            <li className="popup__food">
              <Link className="popup__link" to="/">
                .
              </Link>
              
            </li>
            <li className="popup__food">
              <Link onClick={click} className="popup__link" to="/bar">
                Напитки
              </Link>
            </li>
          </ul>
        </div>)
    }
    return ( <div className={open ? "popup__menu popup_opened" : "popup__menu"}>
          <button className="popup__button" onClick={click}></button>
          <ul className="popup__list">
            <li className="popup__food">
              <a onClick={click} className="popup__link" href="#snack">
                Закуски
              </a>
            </li>
            <li className="popup__food">
              <a onClick={click} className="popup__link" href="#soup">
                Супы
              </a>
            </li>
            <li className="popup__food">
              <a onClick={click} className="popup__link" href="#salad">
                Салаты
              </a>
            </li>
            <li className="popup__food">
              <a onClick={click} className="popup__link" href="#pizza">
                Пицца
              </a>
            </li>
            <li className="popup__food">
              <a onClick={click} className="popup__link" href="#street">
                Стрит
              </a>
            </li>
            <li className="popup__food">
              <a onClick={click} className="popup__link" href="#wheat">
                Лапша пшеничная
              </a>
            </li>
            <li className="popup__food">
              <a onClick={click} className="popup__link" href="#egg">
                Лапша яичная
              </a>
            </li>
            <li className="popup__food">
              <a onClick={click} className="popup__link" href="#desert">
                Десерты
              </a>
            </li>
            <li className="popup__food">
              <Link className="popup__link" to="/">
                .
              </Link>
            </li>
            <li className="popup__food">
              <Link onClick={click} className="popup__link" to="/bar">
                Напитки
              </Link>
            </li>
            <li className="popup__food">
              <Link className="popup__link" to="/">
                .
              </Link>
            </li>
            <li className="popup__food">
              <Link onClick={click} className="popup__link" to="/lunch">
                Обеды
              </Link>
            </li>
          </ul>
        </div>)
  };
  return (
    <div className={open ? "popup popup_opened" : "popup"}>
      {page()}
    </div>
  );
};

export default Popup;
