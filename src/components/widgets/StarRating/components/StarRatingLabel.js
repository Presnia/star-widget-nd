import React, {useContext} from 'react';

import { StarRatingContext } from '../StarRating';

const StarRatingLabel = () => {
    const { rating, labelText } = useContext(StarRatingContext);

    return (
        <div>
            {labelText(rating)}
        </div>
    );
};

export default StarRatingLabel;