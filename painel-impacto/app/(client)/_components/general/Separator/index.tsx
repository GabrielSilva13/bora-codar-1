import { classNames } from '../../../_utils/utils'

type SeparatorProps = {
  marginTop?: boolean
  marginBottom?: boolean
}

export default function Separator(props: SeparatorProps) {
  return (
    <div
      className={classNames(
        'w-full h-[1px] bg-gray-200 block',
        props.marginTop ? 'mt-3' : '',
        props.marginBottom ? 'mb-3' : '',
      )}
    />
  )
}
