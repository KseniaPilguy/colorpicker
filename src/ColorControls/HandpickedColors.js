import React from 'react'
import PropTypes from 'prop-types'
import HandpickedColorsItem from './HandpickedColorsItem'

function HandpickedColors(props) {

    return (
        <div className="handpicked-colors">
            <ul className="color_list">
                {props.colors.map(color => {
                    return <HandpickedColorsItem 
                    color={color} 
                    key={color.id} 
                    open={props.open} 
                    onChange={props.onChange} 
                    current={props.current}
                    changeStatus={props.changeStatus}
                    
                    />
                })}
            </ul>
        </div>
    )
}


HandpickedColors.propTypes = {
    color: PropTypes.object,
    key: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    changeStatus: PropTypes.func,
    open: PropTypes.bool
}


export default HandpickedColors