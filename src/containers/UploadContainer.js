import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as txDataActions from '../actions/tx-data-actions';
import UploadComponent from '../Upload';


class UploadContainer extends Component {
    handleUpload(formData) {
        this.props.txDataService.upload(formData);
    };
    render() {
        const { handleUpload } = this;
        return (
            <UploadComponent handleUpload={handleUpload.bind(this)} />
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
)(UploadContainer);
