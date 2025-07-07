import Drink from "../Drink/Drink";
import Drinks from "../Drinks/Drinks";
import Line from "../Line/Line";


const Bar = () => {
    return ( 
        <div className="bar">
            <h1 className="bar__title">Напитки / Drinks</h1>
            <Line />
            <Drinks />
        </div>
     );
}
 
export default Bar;