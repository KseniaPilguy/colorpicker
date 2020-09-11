import React, { useState } from 'react'
import PropTypes, { func } from 'prop-types'

function ColorsPalette(props, open) {
    function updateRed() {
        setRed(red = document.querySelector('#red').value)
        updateHex()
    }
    function updateGreen() {
        setGreen(green = document.querySelector('#green').value)
        updateHex()
    }
    function updateBlue() {
        setBlue(blue = document.querySelector('#blue').value)
        updateHex()
    }
    function updateHex() {
        props.setCurrent(rgbToHex(red, green, blue))
    }
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(+r) + componentToHex(+g) + componentToHex(+b);
    }

    const hexToRgb = hex =>
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
            , (m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16))

    let res1 = hexToRgb(props.current)
    let [red, setRed] = useState(res1[0])
    let [green, setGreen] = useState(res1[1])
    let [blue, setBlue] = useState(res1[2])
    const [beforeCancelValue, setBeforeCancelValue] = useState(props.current)

    let result = rgbToHex(props.red, props.green, props.blue)

    return (
        <div className="colors-palette">

            <div className="colors">
                <div className="red color-element d-flex align-items-center justify-content-center">
                <label>R</label>
                    <input id="red" type="range"
                        min="0"
                        max="255"
                        steps="1"
                        value={red}
                        onChange={updateRed} />
                    
                </div>
                <div className="green color-element d-flex align-items-center justify-content-center">
                <label>G</label>
                    <input id="green" type="range"
                        min="0"
                        max="255"
                        steps="1"
                        value={green}
                        onChange={updateGreen} />
                    
                </div>
                <div className="blue color-element d-flex align-items-center justify-content-center">
                <label>B</label>
                    <input id="blue" type="range"
                        min="0"
                        max="255"
                        steps="1"
                        value={blue}
                        onChange={updateBlue} />
                    
                </div>
            </div>

            <div className="buttons d-flex justify-content-end">
                <button className="cancel" onClick={() => {
                    props.setCurrent(beforeCancelValue)
                    props.onChange(beforeCancelValue)
                    props.changeStatus(open = false)
                }}> cancel</button>
                <button className="open" onClick={() => {
                    props.onChange(props.current)
                    props.changeStatus(open = false)
                }}> ok</button>

            </div>
        </div>
    )
}


ColorsPalette.propTypes = {
    onChange: PropTypes.func.isRequired,
    changeStatus: PropTypes.func,
    changeStatus1: PropTypes.func,
    open: PropTypes.bool
}

export default ColorsPalette