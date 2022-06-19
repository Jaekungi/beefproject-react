import tokyoxxx from "../../img/tokyoxxx.jpg";
import steak01 from "../../img/steak01.jpg";
import "../../index.css";

function BodyHome() {
  return (
    <div class="row " style={{ width: "95%", justifyContent: "center" }}>
      <div class="row review">
        <div class="col-4">
          <img
            className="rounded-3"
            style={{
              width: 350,
              height: 350,
            }}
            src={tokyoxxx}
            alt=""
          />
        </div>
        <div class="col-8 border-bottom border-dark">
          <h1>TokyoXXX Ari</h1>
          <p>
            Argentinean Style Steakhouse and Churrascaria located in the 541
            Sukhumvit Road. The glass-fronted restaurant-butcher is a place with
            plenty seating room for many diners. The warm and cosy ambiance
            makes guests instantly feel at ease to have a dish from the
            extensive à la carte steak menu, buffet Churrasco rodizio or gourmet
            salad bar. As can be expected, at EL TORO Steakhouse, a wide
            selection of fine wines, beers, spirits and cocktails are available
            to everyone’s delight. In addition, our cooks and waiters deliver a
            natural warm service and hospitality.
          </p>
        </div>
      </div>
      <div class="row review">
        <div class="col-4">
          <img
            className="rounded-3"
            style={{
              width: 350,
              height: 350,
            }}
            src={steak01}
            alt=""
          />
        </div>

        <div class="col-8 border-bottom border-dark">
          <h1>God Beefer</h1>
          <p className="">
            Here at The House of Meat you have the luxury of choosing your steak
            straight from the butchery. Our fridge counter display is arrange
            with all cuts which allows all customers to evaluate and determine
            the quality of the meat. Because we offer cuts of beef from
            different countries such as US, Australia, New Zealand and Thailand,
            the display certainly makes much more easier to make the right
            choice for your dinner. After all, customer satisfaction is our
            priority. Orders online can be made via HappyFresh and pandamart to
            be delivered in the same day.
          </p>
        </div>
      </div>
    </div>
  );
}
export default BodyHome;
