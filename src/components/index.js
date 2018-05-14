import {NavbarMenu} from './ui/NavbarMenu'

export const Menu = ({ children }) =>
	<div className="">
		<NavbarMenu />
		{children}
	</div>

export const Whoops404 = ({ location }) =>
    <div>
		<NavbarMenu />
        <h1>Whoops, resource not found</h1>
        <p>Could not find {location.pathname}</p>
    </div>
