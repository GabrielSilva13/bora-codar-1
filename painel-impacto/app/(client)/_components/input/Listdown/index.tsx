'use client'

import { useMemo, Fragment } from 'react'
import { classNames } from '../../../_utils/utils'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/outline'

export interface ListItem {
    id: number
    text: string
    Icon?: React.ElementType
}

export interface ListItemExtraData {
    id: number
    Icon?: React.ElementType
}

export function injectListItemExtraData(
    dest: ListItem[],
    src: ListItemExtraData[],
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

export default function Listdown(props: {
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
