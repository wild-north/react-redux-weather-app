import { connect } from 'react-redux';

const mapStateToProps = state => ({
    cityName: state.get('cityName'),
    isLoading: state.get('isLoading')
});
const mapDispatchToProps = {};

export const loaderConnector = component =>
    connect(mapStateToProps, mapDispatchToProps)(component);