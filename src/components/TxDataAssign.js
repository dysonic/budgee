import React from 'react';
import TxDataSummary from './TxDataSummary';
import TxDataAssignForm from './TxDataAssignForm';

function TxDataAssign({ txData, tx }) {
    return (
        <div>
            <h2>TxDataAssign</h2>
            <hr />
            <TxDataSummary {...txData} />
            <hr />
            <TxDataAssignForm tx={tx} />
        </div>
    );
}

export default TxDataAssign;
