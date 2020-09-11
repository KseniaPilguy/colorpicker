import React from 'react'
import PropTypes from 'prop-types'


function HandpickedColorsItem({ color, current, onChange, open, changeStatus}) {
    let styles= {
        backgroundColor: color.colorsValue
    }
    return (
        <li className="color_item d-flex align-items-center" onClick={() => {
            current(color.colorsValue)
            onChange(color.colorsValue);
            changeStatus(open = false)
        }}>
            <p>{color.colorsName}</p>
            <div className="color_item_block" style={styles}></div>
        </li>
    )
}

HandpickedColorsItem.propTypes = {
    color: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    changeStatus: PropTypes.func,
    open: PropTypes.bool
}

export default HandpickedColorsItem