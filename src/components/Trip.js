import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/hpa-an.jpg";
import Trip2 from "../assets/images.jpeg";
import Trip3 from "../assets/summer-beach-nature-travel-background-spain-costa-brava-40841681.webp";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia, officially the Republic of Indonesia is a country in southeast Asia and oceania between the between the Indian and Pacific oceans. It consist of over 17,000 Icelands, including Sumatra,Java, Sulawesi, and parts of Borneo and new Guinea. "
        />

        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It’s known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences.   "
        />

        <TripData
          image={Trip3}
          heading="Trip in France"
          text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower.  "
        />
      </div>
    </div>
  );
}

export default Trip;
