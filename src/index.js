import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import { NavbarMenu } from './components/ui/NavbarMenu';
import '../node_modules/bootstrap/less/bootstrap.less';
window.React = React;
render(
	routes,
	document.getElementById('react-container'))
