import React from 'react';
import './TxDataAssignForm.css';

function TxDataAssignForm(props) {
    const { tx } = props;
    return (
        <div className="tx-data-assign-form">
            <div>
                <h3>Transaction Details</h3>
                <ul className="list-unstyled">
                    <li class="header">
                        <span className="tx-date">Date</span>
                        <span className="tx-name">Name</span>
                        <span className="tx-details">Details</span>
                        <span className="tx-amount">Amount</span>
                    </li>
                    <li>
                        <span className="tx-date">{tx.date}</span>
                        <span className="tx-name">{tx.name}</span>
                        <span className="tx-details">{tx.details}</span>
                        <span className="tx-amount">{tx.amount}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TxDataAssignForm;
