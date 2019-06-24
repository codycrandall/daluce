import React from 'react';
import background from '../images/1018exterior.jpg';
import background2 from '../images/1018Living.jpg';
import BackgroundSlideshow from 'react-background-slideshow';


export default function Landing() {

    return (
        <BackgroundSlideshow images={[background, background2]} />
    );
}

