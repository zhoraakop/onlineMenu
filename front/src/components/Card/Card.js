const Card = ({ image, name, information, price }) => {
  return (
    <div className="card">
      <img className="card__image" src={image} alt={name} />
      <div className="card__block">
        <h2 className="card__title">{name}</h2>
        <p className="card__price">{price}</p>
        <p className="card__subtitle">{information}</p>
      </div>
    </div>
  );
};

export default Card;
