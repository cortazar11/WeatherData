import opencage from '../api/opencage';
import darksky from '../api/darksky';

// Action Creator List Cities
export const fetchPosts = (formValue) => {
  console.log('termino', formValue);

  return async (dispatch) => {
    const response = await opencage.get(
      `/geocode/v1/json/?q=${formValue}&key=d7197478c45e4d17bab313057798f3bb`
    );
    console.log('response', response);

    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data,
    });
  };
};

// Action Creator Weather
export const fetchWeather = (selectedPlace) => {
  const lat = selectedPlace ? selectedPlace.lat : null;
  const lng = selectedPlace ? selectedPlace.lng : null;
  console.log('LatLong', `${lat}-${lng}`);
  return async (dispatch) => {
    const response = await darksky.get(
      `/forecast/2623794cbf06a05c50f681a0869ab7ab/${lat},${lng}/?units=si`
    );
    console.log('response', response.data);

    dispatch({
      type: 'FETCH_WEATHER',
      payload: response.data,
    });
  };
};
