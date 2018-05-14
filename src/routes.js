import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/ui/Home'
import { About } from './components/ui/About'
import {MemberList} from './components/ui/MemberList'
import  { Menu, Right, Whoops404  } from './components'
import { NavbarMenu } from './components/ui/NavbarMenu';
import { Alberta } from  './components/ui/Alberta';
import { Manitoba } from  './components/ui/Manitoba';
import { Ontario } from  './components/ui/Ontario';
import { BritishColumbia } from  './components/ui/BritishColumbia';
import { Quebec } from  './components/ui/Quebec';
import { ListVideos } from './components/ui/ListVideos';
import { SearchLocation } from './components/ui/SearchLocation';
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/" component={Menu}>
        	<Route path="alberta" component={Alberta} />
            <Route path="manitoba" component={Manitoba} />
            <Route path="ontario" component={Ontario} />
            <Route path="britishcolumbia" component={BritishColumbia} />
            <Route path="quebec" component={Quebec} />
        	<Route path="findplaces" component={SearchLocation} />
            <Route path="search-videos" component={ListVideos} />
        </Route>
        <Route path="*" component={Whoops404} />
    </Router>
)

export default routes