import { useState } from 'react'
import Separator from '../../general/Separator'
import {
  SettingsIcon,
  LogoutIcon,
  WrenchIcon,
  ManagementIcon,
  MoneyIcon,
  CalendarIcon,
} from '../../svg/menu'
import Link from 'next/link'
import { classNames } from '@/app/(client)/_utils/utils'

type SubItem = {
  label: string
  path: string
}

type NavItemProps = {
  label: string
  path: string
  icon: React.ComponentType<{ className: string }>
  subItems?: SubItem[]
  onClick?: () => void
}

const NavItem = (props: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(true)

  const handleHoverChange = (isHovered: boolean) => {
    setIsHovered(isHovered)
  }

  const handleItemClick = () => {
    setIsExpanded(!isExpanded)
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <li
      className={classNames(
        'text-sm flex cursor-pointer items-center justify-center md:justify-start gap-3 font-medium w-full hover:bg-bx-blue-490 hover:text-bx-white-100 text-bx-grayish-blue-450 bx-element-padding rounded-md',
      )}
      onMouseEnter={() => handleHoverChange(true)}
      onMouseLeave={() => handleHoverChange(false)}
      onClick={handleItemClick}
    >
      <props.icon
        className={classNames(
          'h-6 w-6 md:h-5 md:w-5',
          isHovered ? 'fill-bx-white-100' : 'fill-bx-grayish-blue-450',
        )}
      />
      {props.label}

      {isExpanded && props.subItems && (
        <ul className="flex flex-col gap-1 items-center md:items-start pl-6 bg-yellow-500">
          {props.subItems.map((subItem) => (
            <li key={subItem.label}>
              <Link href={subItem.path}>{subItem.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export function NavItems() {
  const UtilsNavItems: NavItemProps[] = [
    {
      label: 'Configurações',
      icon: SettingsIcon,
      path: '',
      subItems: [
        {
          label: 'Vendedores',
          path: '/vendedores',
        },
        // Adicione mais subitens conforme necessário
      ],
    },
    {
      label: 'Gestão',
      icon: ManagementIcon,
      path: '',
      subItems: [
        // Adicione subitens para 'Gestão' conforme necessário
      ],
    },
    {
      label: 'Financeiro',
      icon: MoneyIcon,
      path: '',
      subItems: [
        // Adicione subitens para 'Financeiro' conforme necessário
      ],
    },
    {
      label: 'Contratos',
      icon: CalendarIcon,
      path: '',
      subItems: [
        // Adicione subitens para 'Contratos' conforme necessário
      ],
    },
    {
      label: 'Área Técnica',
      icon: WrenchIcon,
      path: '',
      subItems: [
        // Adicione subitens para 'Área Técnica' conforme necessário
      ],
    },
  ]

  const MainNavItems: NavItemProps[] = [
    {
      label: 'Logout',
      icon: LogoutIcon,
      path: '/',
      onClick: handleLogout,
    },
  ]

  // Handlers

  function handleLogout() {
    window.location.href = '/login'
  }

  return (
    <nav className="w-full mt-6">
      <ul className="flex flex-col gap-1 items-center lg:items-start">
        {UtilsNavItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </ul>

      <Separator marginTop marginBottom />
      <ul className="flex flex-col gap-1 items-center md:items-start">
        {MainNavItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </ul>
    </nav>
  )
}
