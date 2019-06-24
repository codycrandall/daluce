import React from 'react';
import Router from './ui-core/Router';

import './ui-core/sass/StyleBaseline.scss';

export default function App() {

    return (
        <React.StrictMode>
            <div className={'wrapper'}>
                <Router />
            </div>
        </React.StrictMode>
    );
}
