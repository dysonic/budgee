import React from 'react';
import './TxDataSummary.css';

export function TxDataSummary({ filename, size, startDate, endDate, uploadTime }) {
    return (
        <div className="tx-data-summary">
            <h3>Tx Data</h3>
            <ul className="list-unstyled">
                <li><span>Filename</span><span>{filename}</span></li>
                <li><span>Size (bytes)</span><span>{size}</span></li>
                <li><span>Start date</span><span>{startDate}</span></li>
                <li><span>End date</span><span>{endDate}</span></li>
                <li><span>Upload time</span><span>{uploadTime}</span></li>
            </ul>
        </div>
    );
}

export default TxDataSummary;
