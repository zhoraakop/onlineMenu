const Drink = ({ name, volume, price }) => {
  return (
    <div className="drink">
      <div className="drink__block">
        <h2 className="drink__title">{name}</h2>
        <p className="drink__subtitle">{volume}</p>
        <p className={volume ? "drink__price" : "drink__price drink__price_grid"}>{price}</p>
      </div>
    </div>
  );
};

export default Drink
