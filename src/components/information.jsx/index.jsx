import Luci from "../../assets/imgs/Luci Mancini.jpg";
import Carlo from "../../assets/imgs/Carlo Rizzi.jpg";
import Vito from "../../assets/imgs/Vito Corleone.jpg";
import Carmelia from "../../assets/imgs/Carmelia Corleone.jpg";
import "./index.scss";

const Information = (props) => {
  const { data } = props;

  const getImage = {
    "Luci Mancini.jpg": Luci,
    "Carlo Rizzi.jpg": Carlo,
    "Vito Corleone.jpg": Vito,
    "Carmelia Corleone.jpg": Carmelia,
  };

  return (
    <div className="information">
      <div className="image bg-black">
        <img className="w-40 h-40" alt="" src={getImage[data.image]} />
      </div>

      <div className="information-person ml-8 flex flex-col">
        <p className="text-2xl text-white mb-8">{data?.name}</p>

        <div class="slidecontainer w-80">
          <input
            type="range"
            min="0"
            max="10"
            value={data?.popularity}
            class="slider"
            id="myRange"
          />
        </div>

        <div className="bio h-fit w-full">
          <p className="text-xl text-white">Biography</p>
					<p className="absolute w-1/2 bg-black text-white opacity-50 p-8">{data.biography}</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
