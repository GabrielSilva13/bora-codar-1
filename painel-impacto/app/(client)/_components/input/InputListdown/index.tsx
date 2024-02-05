'use client'

import { Fragment } from 'react'
import { classNames } from '../../../_utils/utils'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { ListItem } from '../Listdown'

export default function InputListdown(props: {
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
            {({ open }) => (
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