import { LogoFull, LogoIcon } from '../../svg/logo'
import Separator from '../../general/Separator'
import { NavItems } from './NavItems'
import { ProfileInfo } from './ProfileInfo'

export function Sidebar() {
  return (
    <aside className="flex-shrink-0 flex flex-col text-bx-blue-700 fill-bx-blue-700 lg:w-72 bg-bx-blue-450 md:w-60 md:py-8 md:px-2 w-16 py-4 px-1 min-h-screen">
      <LogoFull className="w-[80%] mx-auto hidden md:block" />
      <LogoIcon className="w-[60%] mx-auto md:hidden" />

      <NavItems />

      <Separator marginTop marginBottom />

      <ProfileInfo />
    </aside>
  )
}
