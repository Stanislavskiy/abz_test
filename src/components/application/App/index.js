import React, {Component} from 'react';
import '../../../styles/bootstrap.custom.scss';
import '../../../styles/app.scss';
import '../../../styles/font.scss';
import '../../../styles/content.scss';

// Components
import AppHeader from '../AppHeader';
import AppContent from '../AppContent'
import AppLeftSide from '../AppLeftSide';
import AppRightSide from '../AppRightSide'

class App extends Component {
    render () {
        return (
            <div className="app">
                <AppHeader />
                <div className="app__content content">
                    <div className="content__side-column">
                        <AppLeftSide />
                    </div>
                    <div className="content__content-column">
                        <AppContent />
                    </div>
                    <div className="content__side-column">
                        <AppRightSide />
                    </div>
                </div> 
            </div>
        );
}
}

export default App;
