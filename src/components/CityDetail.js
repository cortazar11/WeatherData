import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './CityDetail.css';

class CityDetail extends React.Component {
  renderList() {
    const results = this.props.weather;
    const resultsPhotos = this.props.photos;
    const photo1 = resultsPhotos[0];
    const photo2 = resultsPhotos[1];
    const photo3 = resultsPhotos[2];
    const photo4 = resultsPhotos[3];

    console.log('photo1', photo1);
    const timeUnix = results.currently ? results.currently.time : null;
    const calendar = moment
      .unix(timeUnix)
      .format('dddd, MMMM Do YYYY, h:mm:ss a');
    const summary = results.currently ? results.currently.summary : null;
    const icon = results.currently ? results.currently.icon : null;
    const temperature = results.currently
      ? results.currently.temperature
      : null;
    const humidity = results.currently
      ? results.currently.humidity * 100
      : null;
    const pressure = results.currently ? results.currently.pressure : null;
    const windSpeed = results.currently ? results.currently.windSpeed : null;
    const visibility = results.currently ? results.currently.visibility : null;
    const ozone = results.currently ? results.currently.ozone : null;
    if (
      timeUnix &&
      summary &&
      temperature &&
      humidity &&
      pressure &&
      windSpeed &&
      visibility &&
      ozone &&
      photo1 &&
      photo2 &&
      photo3 &&
      photo4
    ) {
      return (
        <div className="wrapper">
          {/* <Link to="/">
            <button
              className="ui button"
              // onClick={() => window.location.reload()}
            >
              Back
            </button>
          </Link> */}

          <div className="item weather-details">
            <h2>
              <i className="fas fa-cloud-rain"></i>Rain
            </h2>
            <div>
              <h2>Summary</h2>
              <p>{summary}</p>
            </div>
            <div>
              <h2>Temperature</h2>
              <p>{`${temperature}  ºF (degrees Fahrenheit)`}</p>
            </div>
            <div>
              <h2>Humidity</h2>
              <p>{`${humidity} %`}</p>
            </div>
            <div>
              <h2>Pressure</h2>
              <p>{`${pressure} millibars`}</p>
            </div>
            <div>
              <h2>Wind Speed</h2>
              <p>{`${windSpeed} miles per hour`}</p>
            </div>
            <div>
              <h2>Visibility</h2>
              <p>{`${visibility} miles`}</p>
            </div>
            <div>
              <h2>Ozone</h2>
              <p>{`${ozone} dobsons`}</p>
            </div>
          </div>
          <div className="item images">
            <img
              src={
                photo1.urls.raw +
                '&auto=format&w=250&h=200&auto=compress&fit=clamp'
              }
              alt={photo1.alt_description}
            />
            <img
              src={
                photo2.urls.raw +
                '&auto=format&w=250&h=200&auto=compress&fit=clamp'
              }
              alt={photo2.alt_description}
            />
            <img
              src={
                photo3.urls.raw +
                '&auto=format&w=250&h=200&auto=compress&fit=clamp'
              }
              alt={photo3.alt_description}
            />
            <img
              src={
                photo4.urls.raw +
                '&auto=format&w=250&h=200&auto=compress&fit=clamp'
              }
              alt={photo4.alt_description}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="ui segment" style={{ height: '30rem' }}>
          <p></p>
          <div className="ui active dimmer">
            <div className="ui loader"></div>
          </div>
        </div>
      );
    }
  }

  render() {
    console.log('weather', this.props.weather.currently);
    console.log('photos', this.props.photos);

    return (
      // <div className="ui container">
      <div className="containerCity">
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    photos: state.photos,
  };
};

export default connect(mapStateToProps)(CityDetail);
