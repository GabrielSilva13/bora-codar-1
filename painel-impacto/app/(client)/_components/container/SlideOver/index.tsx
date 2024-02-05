import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { classNames } from '../../../_utils/utils'

// Props types
type Args = {
  title?: string
  open: boolean
  onClose?: () => void
  children?: ReactNode
  callerStack?: string[]
}

type Defaults = object

type Props = Args & Defaults

export default function SlideOver(args: Args) {
  // Defaults
  const defaults: Defaults = {}

  const props: Props = {
    ...defaults,
    ...args,
  }

  // Handlers
  function handleClose() {
    props.onClose?.()
  }

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-20 bx-text-normal"
        onClose={handleClose}
      >
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative pointer-events-auto">
                  <div className="flex shadow-xl h-full rounded-l-md overflow-hidden">
                    <div className="flex flex-col relative w-screen max-w-md">
                      {props.callerStack?.length && (
                        <div className="text-sm leading-4 text-right bg-bx-blue-500 text-bx-black-200 bx-element-padding">
                          {props.callerStack?.map((el, idx) => (
                            <span key={idx}>
                              {el}{' '}
                              <ChevronLeftIcon className="inline-block h-4 w-4" />
                            </span>
                          ))}
                        </div>
                      )}
                      <div
                        className={classNames(
                          props.callerStack?.length
                            ? 'bx-secondary-color rounded-tl-md'
                            : 'bx-primary-color',
                          'px-4 py-4 sm:px-6 flex items-center justify-center',
                        )}
                      >
                        <div className="absolute left-0 ml-3 flex items-center bx-clickable">
                          <div className="relative" onClick={handleClose}>
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close Panel</span>
                            <XMarkIcon
                              className="bx-icon-size"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                        <Dialog.Title className="text-base font-semibold leading-3 font-highlight">
                          {props.title}
                        </Dialog.Title>
                      </div>
                      <div className="px-4 py-4 sm:px-6 relative flex-1 overflow-y-auto overflow-x-hidden bg-bx-white-100">
                        {props.children}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
