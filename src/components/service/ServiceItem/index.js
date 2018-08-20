import React, {Component} from 'react';
import '../../../styles/font.scss';
import '../../../styles/service-item.scss';

class ServiceItem extends Component {
    render () {
        const {item} = this.props
        return (
          <div className="service-item">
            <div className="service-item__card">
              <img src={item.icon} alt="img" className="service-item__image"/>
            </div>
            <div className="service-item__title font-regular">
              {item.title}
            </div>
          </div>
        );
    }
}

export default ServiceItem;
