'use client'

import { useState } from 'react'
import { classNames } from '../../../_utils/utils'

export default function ButtonGroup(props: {
    value: number
    buttons: {
        text?: string
        icon?: React.ElementType
    }[]
    disabled?: boolean
    onChange?: (value: number) => void
}) {
    const [value, setValue] = useState(props.value)

    function changeValue(value: number) {
        setValue(value)
        props.onChange && props.onChange(value)
    }

    return (
        <span className={'bx-primary-color-unselected inline-flex bx-element'}>
            {props.buttons.map((element, idx) => (
                <button
                    key={idx}
                    type="button"
                    disabled={props.disabled}
                    onClick={() => changeValue(idx)}
                    className={classNames(
                        value === idx ? 'bx-primary-color' : 'bx-clickable',
                        'rounded-md bx-element-padding font-semibold gap-x-2',
                    )}
                >
                    {element.icon && <element.icon className="bx-icon-size" />}
                    {element.text && <span>{element.text}</span>}
                </button>
            ))}
        </span>
    )
}