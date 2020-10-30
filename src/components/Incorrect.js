import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrownOpen } from '@fortawesome/free-solid-svg-icons';

const Incorrect = () => {
    return <p>Wrong <FontAwesomeIcon icon={faFrownOpen} /> </p>;
}

export default Incorrect;