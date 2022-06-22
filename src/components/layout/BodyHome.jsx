import tokyoxxx from "../../img/tokyoxxx.jpg";
import "../../index.css";
import { useEffect, useState } from "react";
import axios from "../../config/axios";

function BodyHome() {
  const [AllReview, setAllReview] = useState();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const review = await axios.get("/review");
        setAllReview(review.data.reviews);
      } catch (err) {}
    };
    fetchPost();
  }, []);
  console.log(AllReview);

  return (
    <div className="row " style={{ width: "95%", justifyContent: "center" }}>
      <div className="row review">
        <div className="col-4">
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
        <div className="col-8 border-bottom border-dark">
          <h1>TokyoXXX Ari</h1>
          <h5>Best beef in Ari District</h5>
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
      {AllReview?.map((el) => (
        <div key={el.id} className="row review">
          <div className="col-4">
            <img
              className="rounded-3"
              style={{
                width: 350,
                height: 350,
              }}
              src={el.image}
              alt=""
            />
          </div>

          <div className="col-8 border-bottom border-dark">
            <h1>{el.title}</h1>
            <h5>{el.subtitle}</h5>
            <p className="">{el.reviewtext}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default BodyHome;
