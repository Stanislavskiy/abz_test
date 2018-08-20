import React, {Component} from 'react';
import { getCategories } from '../../../api';

import ServiceDirectory from '../../service/ServiceDirectory';
import ServiceList from '../../service/ServiceList';


class AppContent extends Component {
    constructor (props) {
      super(props)
      this.state = {
        serviceItems: null
      }
    };

    componentDidMount() {
      getCategories().then(result => {
        this.setState({ serviceItems: result })
      })
    };

    render () {
        const serviceList = this.state.serviceItems && (
          <ServiceList items={this.state.serviceItems} />
        )
        return (
          <div className="app-content">
            <ServiceDirectory />
            { serviceList }
          </div>
        );
    };
}

export default AppContent;
