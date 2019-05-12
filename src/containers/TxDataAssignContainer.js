import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as txDataActions from '../actions/tx-data-actions';
import TxDataAssign from '../components/TxDataAssign';

class TxDataAssignContainer extends Component {
    componentDidMount() {
        const txDataId = this.props.match.params.id;
        this.props.txDataService.fetchTxDataAsync(txDataId);
    }
    render() {
        const { txData } = this.props;
        if (!txData.transactions || txData.transactions.length === 0) {
            return null;
        }
        const tx = txData.transactions[0];
        return <TxDataAssign txData={txData} tx={tx} />;
    }
}

const mapStateToProps = ({ txData}) => { 
    return {
        txData,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        txDataService: bindActionCreators(txDataActions, dispatch),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TxDataAssignContainer);