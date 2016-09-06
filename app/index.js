import React from 'react';
import ReactDOM from 'react-dom';

var TitleComponent = React.createClass({
    render : function() {
        return (
            <h1>React Play Application</h1>
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