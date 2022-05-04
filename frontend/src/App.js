import React from "react";
import { fetchAllHotels } from "./RestClient";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }

  async fetchDisplayData() {
    let data = await fetchAllHotels();
    this.setState({ hotels: data });
  }

  render() {
    return (
      <div>
        <div id="title">🏨 Hotel-Check </div>
        <button id="fetcher" onClick={this.fetchDisplayData}>
          compare Hotels
        </button>
        <div className="data">
          {/* generates a div for every entry */}
          {this.state.hotels.map((hotel, key) => (
            <div key={key}>
              {hotel.name} in {hotel.city} with {hotel.stars} ⭐ and {hotel.room} rooms
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;