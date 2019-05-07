import React from 'react';
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div>
            <Link className="logo" to="/"><h1>Budgee</h1></Link>
        </div>
    )
};