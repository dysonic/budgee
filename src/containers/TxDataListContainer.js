import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as txDataActions from '../actions/tx-data-actions';

class TxDataListContainer extends Component {
    componentWillMount() {
        this.props.txDataService.fetchAllTxDataAsync();
    }
    render() {
        return (
            <div>
                <p>TxDataListContainer</p>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        txDataService: bindActionCreators(txDataActions, dispatch),
    }
};

export default connect(
    null,
    mapDispatchToProps,
)(TxDataListContainer);
