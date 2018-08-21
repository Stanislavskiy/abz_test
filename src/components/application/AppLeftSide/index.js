import React, {Component} from 'react';

import SideNav from '../../side/SideNav';

class AppLeftSide extends Component {
    render () {
        return (
          <div className="app-left-side col-3">
            <SideNav />
            {/* <SideAdd /> */}
            {/* <CompaniesFuturedList /> */}
          </div>
        );
    }
}

export default AppLeftSide;
