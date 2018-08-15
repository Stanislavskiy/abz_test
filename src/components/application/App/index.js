import React, {PureComponent} from 'react';
import '../../../styles/bootstrap.custom.scss';
import '../../../styles/app.scss';
import '../../../styles/font.scss';

// Components
import AppHeader from '../AppHeader'

class App extends PureComponent {
    render () {
        return (
            <div className="app">
                <AppHeader />
                <section className="app__content container">

                </section>
            </div>
        );
}
}

export default App;
