import React from 'react';
import { Link } from 'react-router-dom';

const AboutDetails = () => {
    return (
        <div className='about'>
            <h2>WHO AM I?</h2>
            <p>Did you know the word ‘essay’ is derived from a
                Latin word ‘exagium’, which roughly translates to
                presenting one’s case? So essays are a short piece
                of writing representing one’s side of the argument</p>
            <div className='borde'>
                <Link to="/contact"
                    className="btn">Contact</Link>
            </div>
        </div>
    )
}

export default AboutDetails;