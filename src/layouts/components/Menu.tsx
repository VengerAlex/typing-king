import {ROUTES} from '@/helpers/types'
import {Gear, House} from 'phosphor-react'
import {NavLink} from 'react-router-dom'
import {ReactElement} from 'react'

type menu = {
  icon: ReactElement,
  to: string
}

const MENU_ITEMS: menu[] = [
  {icon: <House size={32} />, to: ROUTES.HOME},
  {icon: <Gear size={32} />, to: ROUTES.SETTINGS},
]

export const Menu = () => {
  return <header className='menu'>
    <div className='menu__items'>
      {MENU_ITEMS.map(({icon, to}) => (
        <NavLink
          to={to}
          key={to}
          className={({isActive}) => isActive ? 'active_menu' : ''}
        >
          {icon}
        </NavLink>
      ))}
    </div>
  </header>
}
