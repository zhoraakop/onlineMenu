const Lunches = ({day, soup, main, salad, drink}) => {
  return (
    <div className="lunch__block">
      <h2 className="lunch__block-title">{day}</h2>
      <p className="lunch__block-subtitle">{soup}</p>
      <p className="lunch__block-subtitle">{main}</p>
      <p className="lunch__block-subtitle">{salad}</p>
      <p className="lunch__block-subtitle">{drink}</p>
    </div>
  );
};

export default Lunches;
