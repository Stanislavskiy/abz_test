import React, {Component} from 'react';
import '../../../styles/font.scss';
import '../../../styles/service-directory.scss';

class ServiceDirectory extends Component {
    render () {
        return (
          <div className="service-directory d-flex justify-content-between">
            <div className="service-directory__title font-regular">Service directory</div>
            <button className="service-directory__button font-regular">Add new service</button>
          </div>
        );
    }
}

export default ServiceDirectory;
