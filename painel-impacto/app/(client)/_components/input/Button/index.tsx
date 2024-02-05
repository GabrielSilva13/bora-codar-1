'use client'

import { useState } from 'react'
import { classNames } from '../../../_utils/utils'

export const enum ButtonTypes {
  Regular,
  Highlight,
}

function ButtonTypeClasses(type?: ButtonTypes) {
  switch (type) {
    case ButtonTypes.Regular:
      return 'bx-primary-color'
    case ButtonTypes.Highlight:
      return 'bx-secondary-color'
    default:
      return 'bx-primary-color'
  }
}

export default function Button(props: {
  className?: string
  text?: string
  Icon?: React.ElementType
  type?: ButtonTypes
  disabled?: boolean
  thin?: boolean
  onClick?: React.MouseEventHandler
  buttonType?: 'button' | 'submit' | 'reset'
}) {
  return (
    <button
      type={props.buttonType ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classNames(
        ButtonTypeClasses(props.type),
        props.disabled ? 'cursor-not-allowed' : 'bx-clickable',
        props.thin ? 'bx-element-padding-thin' : 'bx-element-padding',
        'inline-flex bx-element items-center font-semibold gap-x-2',
        props.className || '',
      )}
    >
      {props.Icon ? <props.Icon className="bx-icon-size" /> : null}
      {props.text ? (
        <span className="flex-1 text-center">{props.text}</span>
      ) : null}
    </button>
  )
}

export function ButtonGroup(props: {
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
