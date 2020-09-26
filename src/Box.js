import React from 'react'
import PropTypes from 'prop-types';

const BLACK_COLOR_STYLE = { color: 'black' };
const RED_COLOR_STYLE   = { color: 'red' };
const GREEN_COLOR_STYLE = { color: 'green' };

const COLOR_STYLES = [BLACK_COLOR_STYLE, RED_COLOR_STYLE, GREEN_COLOR_STYLE];

export default function Box(props) {

    return (
        <div className="box">
            <h2>Twinkle Twinkle Little Star</h2>
            <p style={COLOR_STYLES[props.colorCode]}>
                Twinkle, twinkle, little star<br/>
                How I wonder what you are<br/>
                Up above the world so high<br/>
                Like a diamond in the sky<br/>
                Twinkle, twinkle little star<br/>
                How I wonder what you are
            </p>
            <div>
                <button onClick={() => props.changeColor(props.indexInBox)}>Color</button>
                <button onClick={() => props.duplicate(props.colorCode, props.indexInBox)}>Duplicate</button>
            </div>
        </div>        
    )
}

//type checking
Box.propTypes = {
    colorCode: PropTypes.number.isRequired,
    changeColor: PropTypes.func.isRequired,
    duplicate: PropTypes.func.isRequired
}