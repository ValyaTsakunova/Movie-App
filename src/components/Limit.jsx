import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import store from '../state-management/index';

import './Limit.css'

function Limit(){
    const onLimitFive = () => {
        store.dispatch({type: 'LIMIT_FIVE'} );
    }

    const onLimitTwenty = () => {
        store.dispatch({type: 'LIMIT_TWENTY'} );
    }

    const onLimitFifty = () => {
        store.dispatch({type: 'LIMIT_FIFTY'} );
    }
    return(
        <div className="limit">
            <DropdownButton id="dropdown-item-button" title="Limit" variant="secondary">
                <Dropdown.Item as="button" onClick={onLimitFive}>5</Dropdown.Item>
                <Dropdown.Item as="button" onClick={onLimitTwenty}>20</Dropdown.Item>
                <Dropdown.Item as="button" onClick={onLimitFifty}>50</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default Limit;