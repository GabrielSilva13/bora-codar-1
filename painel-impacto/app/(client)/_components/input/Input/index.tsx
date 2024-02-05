'use client'

import { useMemo, useState, Fragment } from 'react'
import { classNames } from '../../../_utils/utils'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/outline'

export interface ListItem {
  id: number
  text: string
  Icon?: React.ElementType
}

export interface injectListItemExtraData {
  id: number
  Icon?: React.ElementType
}

export function injectListItemExtraData(
  dest: ListItem[],
  src: injectListItemExtraData[],
): ListItem[] {
  let idxDest: number
  src.forEach((elSrc) => {
    idxDest = dest.findIndex((elDest) => elDest.id === elSrc.id)
    if (idxDest >= 0) {
      dest[idxDest] = {
        ...dest[idxDest],
        Icon: elSrc.Icon,
      }
    }
  })
  return dest
}

export function InputListdown(props: {
  options: ListItem[]
  value: number
  emptyText?: string
  disabled?: boolean
  onChange?: (value: number) => void
  displayText?: boolean
}) {
  function onChangeHandler(value: number) {
    props.onChange?.(value)
  }

  return (
    <Listbox
      value={props.value}
      onChange={onChangeHandler}
      disabled={props.disabled}
    >
      {({ open, disabled }) => (
        <>
          <Listbox.Label className="sr-only">
            Modo de Seleção
          </Listbox.Label>
          <div className="relative">
            <div className="inline-flex">
              <div
                className={classNames(
                  props.displayText ? 'border-l border-bx-black-200 pl-2' : '',
                  'inline-flex items-center gap-x-2 bg-transparent',
                )}
              >
                <p className="font-semibold">
                  {props.displayText &&
                    (props.options.find((el) => el.id === props.value)?.text ||
                      props.emptyText)}
                </p>
              </div>
              <Listbox.Button className="inline-flex items-center bx-clickable bx-element-padding outline-none">
                <span className="sr-only">
                  Modo de Seleção
                </span>
                <ChevronDownIcon className="bx-icon-size" aria-hidden="true" />
              </Listbox.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="bx-element absolute right-0 z-20 mt-[0.2rem] w-40 origin-top-right divide-y divide-bx-black-200 overflow-hidden ring-1 ring-bx-black-200 outline-none">
                {props.options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'bx-primary-color'
                          : 'bx-primary-color-inverted',
                        'bx-clickable bx-element-padding',
                      )
                    }
                    value={option.id}
                  >
                    {({ selected }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p className={selected ? 'font-semibold' : ''}>
                            {option.text}
                          </p>
                        </div>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export default function Input(props: {
  label?: string
  id?: string
  span?: number
  type: string
  value?: string | number
  placeholder?: string
  rows?: number
  disabled?: boolean
  readonly?: boolean
  onChange?: (arg?: any) => any
  onClick?: (arg?: any) => any
  onFocus?: (arg?: any) => any
  onBlur?: (arg?: any) => any
  classNames?: string
  append?: React.ReactElement
  prepend?: React.ReactElement
}) {
  const [focused, setFocused] = useState(false)

  return (
    <>
      <div className={classNames('col-span-full', props.classNames || '')}>
        {props.label && (
          <label htmlFor={props.id} className="block bx-text-normal">
            {props.label}
          </label>
        )}
        <div>
          <div
            className={classNames(
              'w-full flex bx-element bx-border',
              focused ? 'ring-bx-blue-600' : 'ring-bx-black-200',
            )}
          >
            {!props.rows ? (
              <>
                {props.append && (
                  <div className="flex items-center text-bx-black-300">
                    {props.append}
                  </div>
                )}
                <input
                  onChange={props.onChange}
                  type="textarea"
                  name={props.id}
                  id={props.id}
                  placeholder={props.placeholder}
                  value={props.value}
                  disabled={props.disabled}
                  readOnly={props.readonly}
                  onClick={props.onClick}
                  onFocus={() => {
                    setFocused(true)
                    props.onFocus && props.onFocus()
                  }}
                  onBlur={() => {
                    setFocused(false)
                    props.onBlur && props.onBlur()
                  }}
                  className={classNames(
                    'block flex-grow bx-neutral p-1.5 w-full disabled:opacity-50 disabled:cursor-not-allowed',
                    props.classNames ?? '',
                  )}
                />
                {props.prepend && (
                  <div className="flex items-center text-bx-black-300">
                    {props.prepend}
                  </div>
                )}
              </>
            ) : (
              <textarea
                onChange={props.onChange}
                name={props.id}
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                rows={props.rows || 1}
                onFocus={() => {
                  setFocused(true)
                  props.onFocus && props.onFocus()
                }}
                onBlur={() => {
                  setFocused(false)
                  props.onBlur && props.onBlur()
                }}
                className="resize-none block flex-1 bx-neutral p-1.5 w-full"
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export function Listdown(props: {
  label?: string
  id: string
  span?: number
  options: ListItem[]
  value?: number
  emptyText?: string
  disabled?: boolean
  classNames?: string
  onChange?: (value: number) => void
  displayText?: boolean
}) {
  // Handlers
  function onChangeHandler(value: number) {
    props.onChange && props.onChange(value)
  }

  // Memos
  const selectedOption = useMemo<ListItem | undefined>(
    () => props.options.find((el) => el.id === props.value),
    [props.options, props.value],
  )

  return (
    <>
      <div className={classNames('col-span-full', props.classNames || '')}>
        {props.label && (
          <label htmlFor={props.id} className="block bx-text-normal">
            {props.label}
          </label>
        )}
        <Listbox value={props.value} onChange={onChangeHandler}>
          {({ open }) => (
            <>
              <div className="relative">
                <Listbox.Button
                  id={props.id}
                  className="relative bx-element w-full py-1.5 pl-3 pr-10 text-left bx-border ring-bx-black-200 outline-none focus:ring-bx-blue-600 fill-bx-black-900"
                >
                  <span className="flex items-center">
                    {selectedOption?.Icon && (
                      <selectedOption.Icon className="bx-icon-size" />
                    )}
                    <span className="ml-3 block truncate h-6 leading-6">
                      {selectedOption?.text}
                    </span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronDownIcon
                      className="bx-icon-size"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute right-0 z-20 mt-1 w-full origin-top-right divide-y divide-bx-black-200 overflow-hidden rounded-md bg-bx-white-500 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {props.options.map((option) => (
                      <Listbox.Option
                        key={option.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? 'bx-primary-color'
                              : 'bx-primary-color-inverted',
                            'relative cursor-default select-none bx-element-padding',
                          )
                        }
                        value={option.id}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              {option.Icon && (
                                <option.Icon className="bx-icon-size" />
                              )}
                              <span
                                className={classNames(
                                  selected ? 'font-semibold' : '',
                                  'ml-3 block truncate',
                                )}
                              >
                                {option?.text}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active
                                    ? 'bx-primary-color'
                                    : 'bx-primary-color-inverted',
                                  'absolute inset-y-0 right-0 flex items-center pr-2',
                                )}
                              >
                                <CheckIcon
                                  className="bx-icon-size"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
    </>
  )
}
