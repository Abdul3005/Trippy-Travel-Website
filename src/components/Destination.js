import "./DestinationStyles.css";
import Mountain1 from "../assets/travel-destination-scenery-amazing-mountain-nature-beautiful-landscape-scenery_1105964-5723.avif";
import Mountain2 from "../assets/images (4).jpeg";
import Mountain3 from "../assets/photo-1563635623886-96bda57b08b4.avif";
import Mountain4 from "../assets/images (2).jpeg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Populer Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within time frame </p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="On eof the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an iceland. If you fancey a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginers, Guides win assist you most of the way, and you will see the peculiar enviornment found on an active volcano, including volcanic rocks and steam wents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="M. Daguldul, Batangas"
        text="On eof the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an iceland. If you fancey a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginers, Guides win assist you most of the way, and you will see the peculiar enviornment found on an active volcano, including volcanic rocks and steam wents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
        img1={Mountain4}
        img2={Mountain2}
      />
    </div>
  );
};

export default Destination;
