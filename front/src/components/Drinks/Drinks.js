import Drink from "../Drink/Drink";
import Line from "../Line/Line";

const Drinks = () => {
  return (
    <div className="drinks">
      <h2 id="shot" className="drinks__title">
        Настойки
      </h2>
      <Line />
      <div className="drinks__block drinks__shot">
        <Drink name="Сет из 6 настоек" price="1000 р." volume="" />
      </div>
      <Line />
      <h2 id="beer" className="drinks__title">
        Пиво
      </h2>
      <Line />
      <div className="drinks__block drinks__beer">
        <Drink name="Gletcher" price="350 р." volume="" />
        <Drink name="Red button" price="380 р." volume="" />
        <Drink name="Saldens" price="480 р." volume="" />
        <Drink name="4BR" price="520 р." volume="" />
        <Drink name="Guinness draught" price="500 р." volume="" />
      </div>
      <Line />
      <h2 id="cider" className="drinks__title">
        Сидр
      </h2>
      <Line />
      <div className="drinks__block drinks__cider">
        <Drink name="Сидрея" price="350 р." volume="" />
        <Drink name="Дальная дача" price="400 р." volume="" />
        <Drink name="On the bones" price="420 р." volume="" />
        <Drink name="Заповедник" price="420 р." volume="" />
        <Drink name="Trabanco" price="1200 р." volume="" />
        <Drink name="Barkaiztegi" price="1200 р." volume="" />
      </div>
      <Line />
      <h2 id="cocktail" className="drinks__title">
        Коктейли
      </h2>
      <Line />
      <div className="drinks__block drinks__cocktail">
        <Drink name="Aperol spritz" price="550 р." volume="200 мл" />
        <Drink name="Black russian" price="350 р." volume="90 мл" />
        <Drink name="Cuba libre" price="450 р." volume="200 мл" />
        <Drink name="Daiquiri" price="450 р." volume="120 мл" />
        <Drink name="Long island ice tea" price="600 р." volume="200 мл" />
        <Drink name="Margarita" price="450 р." volume="120 мл" />
        <Drink name="Negroni" price="600 р." volume="90 мл" />
        <Drink name="Pornstar martini" price="600 р." volume="200 мл" />
        <Drink name="Whiskey cola" price="450 р." volume="200 мл" />
        <Drink name="White russia" price="450 р." volume="120 мл" />
      </div>
      <Line />
      <h2 id="brandy" className="drinks__title">
        Бренди и коньяк
      </h2>
      <Line />
      <div className="drinks__block drinks__brandy">
        <Drink
          name="Soberano solena gonzalez byass"
          price="350 р."
          volume="40 мл"
        />
        <Drink name="Torres 10 gran reserva" price="400 р." volume="40 мл" />
        <Drink name="Courvoisier VS" price="900 р." volume="40 мл" />
        <Drink name="Courvoisier VSOP" price="1000 р." volume="40 мл" />
      </div>
      <Line />
      <h2 id="whiskey" className="drinks__title">
        Виски
      </h2>
      <Line />
      <div className="drinks__block drinks__whiskey">
        <Drink name="Drummers reserve" price="300 р." volume="40 мл" />
        <Drink name="Sheep's head" price="350 р." volume="40 мл" />
        <Drink name="Johnnie walker red label" price="400 р." volume="40 мл" />
        <Drink name="Jim beam" price="450 р." volume="40 мл" />
        <Drink name="Spearhead single grain" price="500 р." volume="40 мл" />
        <Drink name="Jack daniel's #7" price="550 р." volume="40 мл" />
        <Drink name="Jameson" price="550 р." volume="40 мл" />
        <Drink name="Glenmorangie the original" price="850 р." volume="40 мл" />
      </div>
      <Line />
      <h2 id="rum" className="drinks__title">
        Ром
      </h2>
      <Line />
      <div className="drinks__block drinks__rum">
        <Drink
          name="Carta Vieja extra claro 4 Y.O."
          price="350 р."
          volume="40 мл"
        />
        <Drink name="Carta Vieja anejo 8 Y.O." price="450 р." volume="40 мл" />
        <Drink name="Carta Vieja spiced" price="400 р." volume="40 мл" />
        <Drink name="Dead man's fingers" price="400 р." volume="40 мл" />
        <Drink name="Twin fin" price="550 р." volume="40 мл" />
      </div>
      <Line />
      <h2 id="gin" className="drinks__title">
        Джин
      </h2>
      <Line />
      <div className="drinks__block drinks__gin">
        <Drink name="Bridge park" price="300 р." volume="40 мл" />
        <Drink name="Broom" price="350 р." volume="40 мл" />
        <Drink name="Luxardo sour cherry" price="450 р." volume="40 мл" />
        <Drink name="Mirabeau dry rose" price="650 р." volume="40 мл" />
      </div>
      <Line />
      <h2 id="whiteWine" className="drinks__title">
        Белые вина
      </h2>
      <Line />
      <div className="drinks__block drinks__whiteWine">
        <Drink
          name="«Я хочу плясать один»"
          price="350 р."
          volume="125 мл / сух"
        />
        <Drink
          name="«Флейта-позвоночник»"
          price="350 р."
          volume="125 мл / сух"
        />
      </div>
      <Line />
      <h2 id="redWine" className="drinks__title">
        Красные вина
      </h2>
      <Line />
      <div className="drinks__block drinks__redWine">
        <Drink
          name="«Я хочу плясать один»"
          price="350 р."
          volume="125 мл / сух"
        />
        <Drink
          name="«Флейта-позвоночник»"
          price="350 р."
          volume="125 мл / сух"
        />
      </div>
      <Line />
      <h2 id="pinkWine" className="drinks__title">
        Розовые вина
      </h2>
      <Line />
      <div className="drinks__block drinks__pinkWine">
        <Drink
          name="«Пощечина общественному вкусу»"
          price="350 р."
          volume="125 мл / п/сух"
        />
      </div>
      <Line />
      <h2 id="sparklingWine" className="drinks__title">
        Игристые вина
      </h2>
      <Line />
      <div className="drinks__block drinks__sparklingWine">
        <Drink name="Цимлянское Ц брют" price="350 р." volume="125 мл" />
        <Drink name="Цимлянское Ц п/сух" price="350 р." volume="125 мл" />
        <Drink name="Luxardo Prosecco DOC" price="450 р." volume="125 мл" />
      </div>
      <Line />
      <h2 id="soju" className="drinks__title">
        Соджу
      </h2>
      <Line />
      <div className="drinks__block drinks__soju">
        <Drink name="Jinro" price="200 р." volume="40 мл" />
        <Drink name="Jinro degustation set" price="800 р." volume="40 мл" />
      </div>
      <Line />
      <h2 id="vodka" className="drinks__title">
        Водка
      </h2>
      <Line />
      <div className="drinks__block drinks__vodka">
        <Drink name="Стужа" price="200 р." volume="40 мл" />
        <Drink name="Mamont" price="350 р." volume="40 мл" />
        <Drink name="Онегин" price="450 р." volume="40 мл" />
      </div>
      <Line />
      <h2 id="vermut" className="drinks__title">
        Вермут
      </h2>
      <Line />
      <div className="drinks__block drinks__vermut">
        <Drink name="Dolin rouge" price="300 р." volume="" />
        <Drink name="Dolin bianco" price="300 р." volume="" />
      </div>
      <Line />
      <h2 id="coffee" className="drinks__title">
        Кофе и не только
      </h2>
      <Line />
      <div className="drinks__block drinks__coffee">
        <Drink name="Фильтр-кофе (+молоко)" price="150 р.(+30 р.)" volume="" />
        <Drink name="Чай" price="200 р." volume="" />
      </div>
      <Line />
      <h2 id="lemonade" className="drinks__title">
        Лимонады
      </h2>
      <Line />
      <div className="drinks__block drinks__lemonade">
        <Drink name="Ананас-малина" price="250 р." volume="" />
        <Drink name="Клубника-лайм" price="250 р." volume="" />
        <Drink name="Дыня-мята" price="250 р." volume="" />
        <Drink name="Манго-маракуйя" price="250 р." volume="" />
      </div>
      <Line />
      <h2 id="iceTea" className="drinks__title">
        Холодный чай
      </h2>
      <Line />
      <div className="drinks__block drinks__iceTea">
        <Drink name="Каркаде-черешня" price="250 р." volume="" />
        <Drink name="Улун-ананас" price="250 р." volume="" />
      </div>
      <Line />
      <h2 id="naDrink" className="drinks__title">
        Б/а напитки
      </h2>
      <Line />
      <div className="drinks__block drinks__naDrink">
        <Drink name="Сок" price="150 р." volume="250 мл" />
        <Drink name="BonAqua" price="200 р." volume="330 мл" />
        <Drink name="Dr.pepper" price="200 р." volume="330 мл" />
        <Drink name="Cola" price="200 р." volume="330 мл" />
        <Drink name="Burn" price="250 р." volume="250 мл" />
        <Drink name="ДаДа шорли" price="280 р." volume="500 мл" />
        <Drink name="Пиво bakalar б/a" price="350 р." volume="330 мл" />
      </div>
    </div>
  );
};

export default Drinks;
