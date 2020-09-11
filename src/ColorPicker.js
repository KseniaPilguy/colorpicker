import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import HandpickedColors from './ColorControls/HandpickedColors'
import ColorsPalette from './ColorControls/ColorsPalette'


function ColorPicker(props) {

    let [openPalette, setOpenPalette] = React.useState(false)
    let [open, setOpen] = React.useState(false)

    let menuRef = useRef();
    let menuRef1 = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (!menuRef1.current.contains(event.target)) {
                setOpen(false)
            }
        })
    })

    function changeStatusColor(open) {
        setOpen(open)
    }

    function changeStatusPalette(open) {
        setOpenPalette(open)
    }

    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (!menuRef.current.contains(event.target)) {
                setOpenPalette(false)
            }
        })
    })

    let [current, setCurrent] = useState(props.value)

    let styles = {
        backgroundColor: current
    }


    return (
        <div className="colorPicker d-flex justify-content-between align-items-center">
            <p className="hex-code"><span> {props.value} </span></p>
            <div className="colorPicker_buttons d-flex">
                <div ref={menuRef} className="colorPicker_palete d-flex justify-content-center align-items-center">
                    <div onClick={() => setOpenPalette(openPalette = true)} className="palete" style={styles}></div>
                    <div className="colorPicker_slider">
                        {openPalette &&
                            <ColorsPalette
                                onChange={props.onChange}
                                open={open}
                                current={current}
                                setCurrent={setCurrent}
                                changeStatus={changeStatusPalette}
                                r={props.red}
                                green={props.green}
                                blue={props.blue}
                            />
                        }
                    </div>
                </div>
                <div ref={menuRef1} className="colorPicker_standart d-flex align-items-center justify-content-center">
                    <button onClick={() => setOpen(open = true)}>
                        </button>
                    {open &&
                        <HandpickedColors
                            colors={props.colors}
                            onChange={props.onChange}
                            current={setCurrent}
                            open={open}
                            changeStatus={changeStatusColor}
                            changeBackground={props.changeBackground}
                        />
                        }
                </div>
            </div>
        </div>
    )
}


ColorPicker.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChange: PropTypes.func.isRequired,
    changeStatus: PropTypes.func,
    changeStatus1: PropTypes.func,
    open: PropTypes.bool
}

export default ColorPicker