import React, {Component} from 'react';
import menu from '../../../assets/side/js/side-menu';

class SideNavItem extends Component {
    render () {
        return (
          <a 
            className="side-nav-item"
            href={this.props.href}
          >
            <img 
              className="side-nav-item__image"
              src={this.props.icon}
              alt="img" 
            />
            <span className="side-nav-item__title">
              {this.props.title}
            </span>
          </a>
        );
    }
}

export default SideNavItem;