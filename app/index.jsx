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
            <h1 style={styles.title}>React Play Application</h1>
        );
    }
})

var ulStyle = {
                    color : 'white',
                    background : '#333',
                    margin : 0,
                    padding : 0,
                    float : 'left',
                    'list-style' : 'none',
};

var liStyle = {
                    height : 35,
                    float: 'left',
                    'line-height' : 35,
                    'margin-left' : '20',
                    'margin-right' : '10'
}

/* NavComponent */
var NavComponent = React.createClass({
    render : function() {
        var navList = this.props.data.map(function(nav) {
            return <li style={liStyle}>{nav.id}.{nav.title}</li>
        });
        return (
            <div className="nav">
                <ul style={ulStyle}>
                    {navList}
               </ul>
            </div>
        );
    }
})

var navData = [
    {id:1, title : 'Home'},
    {id:2, title : 'About'},
    {id:3, title : 'Docs'},
    {id:4, title : 'Support'}
];

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

var tableData = [
    {id:1, text : 'Table 1'},
    {id:2, text : 'Table 2'},
    {id:3, text : 'Table 3'},
    {id:4, text : 'Table 4'}
];

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
        var tableList = this.props.data.map(function(tab) {
            return <div style={styles.table}>{tab.id}.{tab.text}</div>
        });         
        return (
            <div className="TableComponent">
                {tableList}
                <div style={ styles.table}>Table 5</div>
                <div style={ styles.table}>Table 6</div>
                <div style={ styles.table}>Table 7</div>
                <div style={ styles.table}>Table 8</div>

            </div>    
        );
    }
})

var AppComponent = React.createClass({
    render : function() {
        return (
            <div className="AppComponent">
                <TitleComponent />
                <NavComponent data={this.props.navData} />
                <br /><br /><br /><br />
                <ButtonComponent />
                <br /><br />
                <TableComponent data={this.props.tableData} />
            </div>    
        );
    }
});

ReactDOM.render(
    <AppComponent navData={navData} tableData={tableData} />,
    document.getElementById('content')
);

