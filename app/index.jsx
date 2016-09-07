import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS from 'reactcss';

var TitleComponent = React.createClass({
    render : function() {
        const styles = reactCSS({
            'default': {
                title: {
                    fontSize: '28px',
                    color: 'blue'
                },

             },
        });
    
        return (
            <h1 style={ styles.title}>React Play Application</h1>
        );
    }
})

var NavComponent = React.createClass({
    render : function() {
        return (
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Docs</li>
                    <li>Support</li>
                </ul>
            </div>
        );
    }
})

var AppComponent = React.createClass({
    render : function() {
        return (
            <div className="AppComponent">
                <TitleComponent />
                <NavComponent />
            </div>    
        );
    }
});

ReactDOM.render(
    <AppComponent />,
    document.getElementById('content')
);