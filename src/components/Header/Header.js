import { Link, useLocation } from "react-router";

const Header = ({ click }) => {
  const location = useLocation();
  //const isBarPage = location.pathname === "/bar";
  const color = () =>{
    if(location.pathname === "/bar"){
        return (<button className="header__button" onClick={click}>
        <span
          className="header__span header__span_black"
        ></span>
        <span
          className="header__span header__span_black"
        ></span>
        <span
          className="header__span header__span_black"
        ></span>
      </button>)}
      if(location.pathname === "/lunch"){
        return (<button className="header__button" onClick={click}>
        <span
          className="header__span header__span_pink"
        ></span>
        <span
          className="header__span header__span_pink"
        ></span>
        <span
          className="header__span header__span_pink"
        ></span>
      </button>)}
      return (<button className="header__button" onClick={click}>
        <span
          className="header__span"
        ></span>
        <span
          className="header__span"
        ></span>
        <span
          className="header__span"
        ></span>
      </button>)
    }
  return (
    <div className="header">
      <Link to="/">
        <img
          alt="Логотип"
          className="header__image"
          src="https://static.tildacdn.com/tild6632-6436-4561-a231-313066343033/Layer_3.svg"
        />
      </Link>
      {color()}
    </div>
  );
};

export default Header;
