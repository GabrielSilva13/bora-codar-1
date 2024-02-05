import { NotAllowedIcon } from '../../svg/shared'

const NothingFound = () => {
  return (
    <div className="relative z-50 flex items-center justify-center my-3">
      <strong className="text-bx-blue-100 font-semibold flex items-center gap-2">
        Nada encontrado <span className='flex items-center'><NotAllowedIcon />.</span>
      </strong>
    </div>
  )
}

export default NothingFound
