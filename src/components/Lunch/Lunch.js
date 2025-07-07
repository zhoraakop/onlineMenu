import Line from "../Line/Line";
import Lunches from "../Lunches/Lunches";

const Lunch = () => {
  return (
    <div className="lunch">
      <h1 className="lunch__title">Обеды</h1>
      <div className="lunch__block-time">
        <p className="lunch__time">Понедельник - пятница</p>
        <p className="lunch__time"> с 12:00 до 16:00</p>
      </div>
      <div className="lunch__block-price">
        <p className="lunch__price">ОБЕД ИЗ 3х БЛЮД + НАПИТОК</p>
        <span className="lunch__price">350 р.</span>
      </div>
      <Line />
      <Lunches
        day="Понедельник"
        soup="Суп харчо"
        main="Котлеты домашние с пюре"
        salad="Салат овощной"
        drink="Морс / Чай / Фильтр-кофе"
      />
      <Lunches
        day="Вторник"
        soup="Суп лапша"
        main="Курица по корейски с рисом"
        salad="Битые огурцы"
        drink="Морс / Чай / Фильтр-кофе"
      />
      <Lunches
        day="Среда"
        soup="Окрошка с курицей"
        main="Отбивная из свинины с макаронами"
        salad="Салат оливье"
        drink="Морс / Чай / Фильтр-кофе"
      />
      <Lunches
        day="Четверг"
        soup="Солянка"
        main="Чикенстрогонов с пюре"
        salad="Салат капустный"
        drink="Морс / Чай / Фильтр-кофе"
      />
      <Lunches
        day="Пятница"
        soup="Томатный суп с фасолью и курицей"
        main="Филе бедра с рисом и овощами"
        salad="Морковь по-корейски"
        drink="Морс / Чай / Фильтр-кофе"
      />
    </div>
  );
};

export default Lunch;
/*
<Lunches
  day="Понедельник"
  soup="Грибной суп"
  main="Паста с курицей и грибами"
  salad="Салат крабовый"
  drink="Морс / Чай / Фильтр-кофе"
/>
<Lunches
  day="Вторник"
  soup="Борщ"
  main="Котлета куриная с пюре"
  salad="Салат винегрет"
  drink="Морс / Чай / Фильтр-кофе"
/>
<Lunches
  day="Среда"
  soup="Окрошка с курицей"
  main="Тефтели с гречкой"
  salad="Салат свекольный"
  drink="Морс / Чай / Фильтр-кофе"
/>
<Lunches
  day="Четверг"
  soup="Сырный суп"
  main="Айдахо со стрипсами"
  salad="Салат коул слоу"
  drink="Морс / Чай / Фильтр-кофе"
/>
<Lunches
  day="Пятница"
  soup="Суп с фрикадельками"
  main="Куриная отбивная с макаронами"
  salad="Салат оливье"
  drink="Морс / Чай / Фильтр-кофе"
/>
*/
