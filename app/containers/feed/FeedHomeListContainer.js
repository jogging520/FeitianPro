/**
 * Created by ljunb on 16/5/26.
 */
import React from 'react';
import {connect} from 'react-redux';
import FeedHomeList from '../../pages/feed/FeedHomeList';

class FeedHomeListContainer extends React.Component {
    render() {
        return (
            <FeedHomeList {...this.props} />
        )
    }
}

export default connect((state) => {
    const {feedHome} = state;
    return {feedHome}
})(FeedHomeListContainer);