import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';


import '../sass/components/Header.scss';

export default function Header() {

    return (
        <div>
            <FontAwesomeIcon icon={faCarSide} />
        </div>
    );
}
