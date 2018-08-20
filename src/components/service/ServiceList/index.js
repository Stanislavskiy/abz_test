import React, {PureComponent} from 'react';
import '../../../styles/font.scss';
import '../../../styles/service-list.scss';

import ServiceItem from '../ServiceItem';

class ServiceList extends PureComponent {
    render () {
        const {items} = this.props
        const itemList = items && items.map(item => {
            return (
              <li key={item.id}>
                <ServiceItem 
                  item={item} 
                />
              </li>
            )
          })
        return (
          <ul className="service-list d-flex justify-content-between flex-wrap">
            {itemList}
          </ul>
        );
    }
}

export default ServiceList;
