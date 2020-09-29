import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchWeather } from '../actions';
import { Link } from 'react-router-dom';

class PlacesList extends React.Component {
  renderList() {
    if (this.props.posts.results) {
      return this.props.posts.results.map((place, index) => {
        return (
          <Link to="weather" key={index}>
            <div
              className="ui segment"
              onClick={() => this.props.fetchWeather(place.geometry)}
            >
              {place.formatted}
            </div>
          </Link>
        );
      });
    }
  }
  render() {
    const results = this.props.posts.results;

    return (
      <div>
        <div className="ui list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts, fetchWeather })(
  PlacesList
);
