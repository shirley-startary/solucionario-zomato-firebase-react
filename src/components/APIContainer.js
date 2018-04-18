import React from "react";

class APIContainer extends React.Component {
  constructor() {
    super();
    this.state = { cities: [] };
  }

  componentDidMount() {
    const url = "https://developers.zomato.com/api/v2.1/cities?q=new";
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "user-key": "e761f59c42792cb470b64cb10b3e8b08"
      }
    })
      .then(data => data.json())
      .then(data => {
        this.setState({ cities: data.location_suggestions });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Aqui va el API</h1>
        {this.state.cities.map(city => {
          return (
            <div>
              <p>{city.name}</p>
              <img src={city.country_flag_url} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default APIContainer;
