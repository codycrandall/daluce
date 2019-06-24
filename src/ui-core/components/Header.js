import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import '../sass/components/Header.scss';

export default function Header() {

    return (
        <div className={'header'}>
            <FontAwesomeIcon icon={faBars} size={'2x'} />
            <div>Daluce Realty</div>
        </div>
    );
}
