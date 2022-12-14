import React, {useState, createContext} from "react";
import PropTypes from "prop-types";

import StarRatingLabel from "./components/StarRatingLabel";
import StarsList from "./components/StarsList";

export const StarRatingContext = createContext(0);

const StarRating = ({
               defaultState,
               emptyColor,
               fillColor,
               height,
               labelText,
               maxValue,
               onChangeHover,
               onChangeValue,
               readOnly,
               width,
               }) => {
    const [rating, setRating] = useState(defaultState);
    const [hover, setHover] = useState(null);

    const setRatingFn = (e) => {
        if (readOnly) return;

        const value = e.currentTarget.dataset.star;

        setRating(value);
        onChangeValue(value);
    }

    const setHoverFn = (e) => {
        if (readOnly) return;

        const value = e.type === 'mouseleave' ? null : e.currentTarget.dataset.star;

        setHover(value);
        onChangeHover(value);
    }

    return (
        <>
            <StarRatingContext.Provider
                value={{
                    emptyColor,
                    fillColor,
                    height,
                    hover,
                    labelText,
                    rating,
                    setHover: setHoverFn,
                    setRating: setRatingFn,
                    width,
                    maxValue,
                }}
            >
                <>
                    <StarRatingLabel />
                    <StarsList />
                </>
            </StarRatingContext.Provider>
        </>
    );
}

StarRating.propTypes = {
    defaultState: PropTypes.number,
    emptyColor: PropTypes.string,
    fillColor: PropTypes.string,
    height: PropTypes.number,
    labelText: PropTypes.func,
    maxValue: PropTypes.number,
    onChangeHover: PropTypes.func,
    onChangeValue: PropTypes.func,
    readOnly: PropTypes.bool,
    width: PropTypes.number,
};

StarRating.defaultProps = {
    defaultState: 0,
    emptyColor: "lightgray",
    fillColor: "#ffbc5a",
    height: 53,
    labelText: (value) => `Rating is: ${value}`,
    maxValue: 5,
    onChangeHover: () => {},
    onChangeValue: () => {},
    readOnly: false,
    width: 53,
};

export default StarRating;