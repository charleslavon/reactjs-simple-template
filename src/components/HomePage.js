import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    <h3 onClick={() => this.props.actions.fetchNews()}> Click for the forecast </h3>
                    <span ><h4>{this.props.news.day}</h4>{this.props.news.forecast}</span>
                </div>
            );
    }
}

HomePage.propTypes = {
    actions: PropTypes.object.isRequired,
    news: PropTypes.object
};

HomePage.defaultProps = {
    news:{
        day: 'today',
        forecast: 'will be better than yesterday.'
    }
};

function mapStateToProps(state) {
    return {
        news: state.news[0]
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(HomePage);
