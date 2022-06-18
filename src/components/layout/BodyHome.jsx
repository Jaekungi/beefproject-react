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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sed
            ea inventore similique non, optio libero omnis repudiandae delectus
            cupiditate, nisi officia quia, explicabo odit dolorem tenetur
            nesciunt. Deleniti, maxime? Eos, placeat eligendi sequi doloremque
            inventore temporibus quam necessitatibus blanditiis neque natus
            accusantium odio delectus commodi quo, voluptatum ipsam recusandae.
            Molestias laboriosam minima omnis laudantium provident atque
            adipisci ab laborum. Obcaecati enim delectus commodi vero sunt?
            Possimus neque commodi nam at quod accusantium quisquam corporis
            saepe quidem, pariatur, enim dolores, laboriosam illum sequi facilis
            fugiat odit. Ducimus magnam est porro. Consequatur, qui velit,
            distinctio eaque ipsa aut similique dicta, quos obcaecati
            voluptatibus cumque incidunt optio doloribus veritatis magni sit
            corporis ut labore! Ea, accusantium hic eum nihil eveniet explicabo
            reiciendis! Modi odio, amet tempore magnam a voluptate excepturi
            totam maiores aliquam quasi aperiam dolorem fugit, sunt doloribus
            suscipit labore deserunt, explicabo vitae deleniti. Commodi neque
            corrupti id asperiores, labore ducimus.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sed
            ea inventore similique non, optio libero omnis repudiandae delectus
            cupiditate, nisi officia quia, explicabo odit dolorem tenetur
            nesciunt. Deleniti, maxime? Eos, placeat eligendi sequi doloremque
            inventore temporibus quam necessitatibus blanditiis neque natus
            accusantium odio delectus commodi quo, voluptatum ipsam recusandae.
            Molestias laboriosam minima omnis laudantium provident atque
            adipisci ab laborum. Obcaecati enim delectus commodi vero sunt?
            Possimus neque commodi nam at quod accusantium quisquam corporis
            saepe quidem, pariatur, enim dolores, laboriosam illum sequi facilis
            fugiat odit. Ducimus magnam est porro. Consequatur, qui velit,
            distinctio eaque ipsa aut similique dicta, quos obcaecati
            voluptatibus cumque incidunt optio doloribus veritatis magni sit
            corporis ut labore! Ea, accusantium hic eum nihil eveniet explicabo
            reiciendis! Modi odio, amet tempore magnam a voluptate excepturi
            totam maiores aliquam quasi aperiam dolorem fugit, sunt doloribus
            suscipit labore deserunt, explicabo vitae deleniti. Commodi neque
            corrupti id asperiores, labore ducimus.
          </p>
        </div>
      </div>
    </div>
  );
}
export default BodyHome;
