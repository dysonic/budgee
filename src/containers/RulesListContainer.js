import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as txRuleActions from '../actions/tx-rule-actions';
import RulesListComponent from '../components/RulesList';

class UploadContainer extends Component {
    componentWillMount() {
        this.props.txRulesService.fetchAllStringRulesAsync();
    }
    render() {
        return (
            <RulesListComponent />
        );        
    }
}

const mapStateToProps = ({ txData}) => { 
    return {
        txData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        txRulesService: bindActionCreators(txRuleActions, dispatch),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UploadContainer);
