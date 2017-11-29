import { connect } from 'react-redux';
import { getWeather, changeCityName } from '../../actions';

const mapStateToProps = state => ({
    cityName: state.get('cityName')
});
const mapDispatchToProps = {
    changeCityName,
    getWeather
};
export const formConnector = component =>
    connect(mapStateToProps, mapDispatchToProps)(component);