import React from 'react'
import clx from 'classnames'
import $ from "./index.module.scss"

export function Switch({ active, toggleActive }) {
    return (
        <span className={clx($.switch, { [$.switch_on]: active })} onClick={toggleActive}></span>
    )
}
