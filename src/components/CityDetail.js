import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

class CityDetail extends React.Component {
  renderList() {
    const results = this.props.weather;
    const timeUnix = results.currently ? results.currently.time : null;
    const calendar = moment
      .unix(timeUnix)
      .format('dddd, MMMM Do YYYY, h:mm:ss a');
    const summary = results.currently ? results.currently.summary : null;
    const icon = results.currently ? results.currently.icon : null;
    const temperature = results.currently
      ? results.currently.temperature
      : null;
    // const calcHumidity = parseInt(results.currently.humidity) * 100;
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
      ozone
    ) {
      return (
        <div>
          <Link to="/">
            <button className="ui button" onClick="window.location.relaod()">
              Back
            </button>
          </Link>
          <div className="ui list">
            <div className="item">
              <div className="content">
                <div className="ui header">Date:</div>
                <div className="description">{calendar}</div>
              </div>
            </div>
            <div className="item">
              <i className="fa"></i>
            </div>
            <div className="item">
              <div className="content">
                <div className="ui header">Summary</div>
                <div className="description">{summary}</div>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="ui header">Temperature</div>
                <div className="description">{`${temperature} degrees Fahrenheit`}</div>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="ui header"></div>
                <div className="description">{}</div>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="ui header">Humidity</div>
                <div className="description">{`${humidity} %`}</div>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="ui header">Pressure</div>
                <div className="description">{`${pressure} Millibars`}</div>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="ui header">WindSpeed</div>
                <div className="description">{`${windSpeed} Miles per Hour`}</div>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="ui header">Visibility</div>
                <div className="description">{`${visibility} Miles`}</div>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="ui header">Ozone</div>
                <div className="description">{`${ozone} Dobsons`}</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="ui segment" style={{ height: '30rem' }}>
          <p></p>
          <div class="ui active dimmer">
            <div class="ui loader"></div>
          </div>
        </div>
      );
    }
  }

  render() {
    console.log('weather', this.props.weather.currently);

    return (
      <div className="ui container">
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

export default connect(mapStateToProps)(CityDetail);
