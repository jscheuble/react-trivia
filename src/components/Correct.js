import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinStars } from '@fortawesome/free-solid-svg-icons';

const Correct = () => {
    return <p>Nice Job! <FontAwesomeIcon icon={faGrinStars} /> </p>;
}

export default Correct;