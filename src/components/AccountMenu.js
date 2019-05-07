import React from 'React';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

function AccountMenu({ accountItems }) {
    return (
        <div>
            <ul className="list-unstyled">
                {accountItems.length && accountItems.map(item => <li>item.account.format</li>)}
            </ul>
        </div>
    );
}

AccountMenu.propTypes = {
    accountItems: PropTypes.array.isRequired,
};

export default AccountMenu;
