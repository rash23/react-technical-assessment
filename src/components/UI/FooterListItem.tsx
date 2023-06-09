import { FC } from 'react'
import { listItemType } from 'src/redux/General/types'
import { NavLink } from 'react-router-dom'

const FooterListItem: FC<listItemType> = ({ title, link }): JSX.Element => {
	return (
		<li className="cursor-pointer text-sm md:text-base">
			<NavLink to={link}>{title}</NavLink>
		</li>
	)
}

export default FooterListItem
