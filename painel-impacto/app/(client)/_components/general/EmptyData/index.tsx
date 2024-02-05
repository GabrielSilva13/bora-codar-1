import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Button from '../../input/Button'
import { EmptyFolderIcon } from '../../svg/shared'

const EmptyData = (props: {
  title: string
  description?: string
  buttonLabel?: string
  onClick?: (args?: unknown) => void
}) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <EmptyFolderIcon />
      <strong className="text-lg text-bx-blue-100 font-semibold mt-1">
        {props.title}
      </strong>
      <span className="text-sm text-bx-blue-100 mb-3">
        {props.description}
      </span>

      {props.buttonLabel && (
        <Button
          Icon={PlusCircleIcon}
          text={props.buttonLabel}
          onClick={props.onClick}
        />
      )}
    </div>
  )
}

export default EmptyData
