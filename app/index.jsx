import React from 'react';
import ReactDOM from 'react-dom';
import reactCSS, { hover } from 'reactcss';

/* TitleComponent */
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

/* NavComponent */
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

/* ButtonComponent */
var ButtonComponent = React.createClass({
    render : function() {
        const styles = reactCSS({
            'default': {
                button_A: {
                    width: '80px',
                    height: '30px',
                    background: '#FFAA66',
                    border: '1px #996633 solid',
                    'border-radius' : '5px'
                },
                button_B: {
                    width: '80px',
                    height: '30px',
                    background: '#BBCC66',
                    border: '1px #999955 solid',
                    'border-radius' : '5px'
                },
                button_C: {
                    width: '80px',
                    height: '30px',
                    color: '#222',
                    background: '#66BBFF',
                    border: '1px #3377AA solid',
                    'border-radius' : '5px'
                },
                button_D: {
                    width: '80px',
                    height: '30px',
                    color: '#222',
                    background: '#AAA',
                    border: '1px #333 solid',
                    'border-radius' : '5px'
                },
            },
        });
        return (
            <div className="ButtonComponent">
                <input type="button" style={ styles.button_A} value="Button A" />&nbsp;
                <input type="button" style={ styles.button_B} value="Button B" />&nbsp;
                <input type="button" style={ styles.button_C} value="Button C" />&nbsp;
                <input type="button" style={ styles.button_D} value="Button D" />&nbsp;
            </div>
        );
    }
})

/* TableComponent */
var TableComponent = React.createClass({
    render : function() {
        const styles = reactCSS({
            'default': {
                table: {
                    width: '100px',
                    height: '50px',
                    border: '1px green solid',
                },
            }   
         });         
        return (
            <div className="TableComponent">
                <div style={ styles.table}>Table 1</div>
                <div style={ styles.table}>Table 2</div>
                <div style={ styles.table}>Table 3</div>
                <div style={ styles.table}>Table 4</div>
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
                <ButtonComponent />
                <br />
                <TableComponent />
            </div>    
        );
    }
});

ReactDOM.render(
    <AppComponent />,
    document.getElementById('content')
);

