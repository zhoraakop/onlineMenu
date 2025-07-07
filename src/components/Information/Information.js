
const Information = ({isLoading}) => {
  return (
    <div className={isLoading ? "information information_disabled" : 'information'}>
      <div className="information__block">
        <h2 className="information__title">Бар «Футурист»</h2>
        <p className="information__address">
          <span> 308012, г. Белгород, </span>
          <span>Проспект Ватутина 5б</span>
        </p>
        <p className="information__time">
          Часы работы:
          <span>Пн-Чт: 12:00 - 00:00</span>
          <span>Пт: 12:00 - 04:00</span>
          <span>Сб: 14:00 - 04:00</span>
          <span>Вс: 14:00 - 00:00</span>
        </p>
        <a className="information__telephone" href="tel:+74722770680">
          +7 (4722) 77-06-80
        </a>
        <a
          className="information__instagram"
          href="http://instagram.com/_u/futurist.bar.kitchen/"
        >
          @FUTURIST.BAR.KITCHEN
        </a>
      </div>
      <div className="information__map" id="map"></div>
    </div>
  );
};

export default Information;
