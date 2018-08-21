import React, {Component} from 'react';
import menu from '../../../assets/side/js/side-menu';
import SideNavItem from '../SideNavItem';

class SideNav extends Component {
    render () {
        const menuItemList =  menu && menu
          // filter items by order field ascending
          .sort((a, b) => a.order > b.order)
          .map(item => (
            <li className="side-nav__item">
              <SideNavItem 
                title={item.title} 
                icon={item.icon}
                href={item.href}
              />
            </li>
          )) 
        return (
          <ul className="side-nav">
            {menuItemList}
          </ul>
        );
    }
}

export default SideNav;