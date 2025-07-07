import { useLocation } from "react-router";

const Line = () => {
  const location = useLocation();
  const isBarPage = location.pathname === "/bar";
  return (
    <div className="line">
      {!isBarPage ? (
        <>
          <div className="line_first"></div>
          <div className="line_second"></div>
          <div className="line_third"></div>
        </>
      ) : (
        <>
          <div className="line_first_black"></div>
          <div className="line_second_black"></div>
          <div className="line_third_black"></div>
        </>
      )}
    </div>
  );
};

export default Line;
