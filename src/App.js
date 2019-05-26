import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        items: []
    };

    deleteItem = index => {
        const { items } = this.state;

        this.setState({
            items: items.filter((item, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = item => {
        this.setState({items: [...this.state.items, item]});
    }

    render() {
        const { items } = this.state;

        return (
            <div className="container">
                <h1>Shopping List</h1>
                <h2>Don't forget!</h2>
                <Table
                    listOfItems={items}
                    deleteItem={this.deleteItem}
                />
                <h4>To bring</h4>
                <Form handleSubmit={this.handleSubmit} />
                <br />
                <h6>This application is based on Tania Rascia's React tutorial. All credits go to her.</h6>
            </div>
        );
    }
}

export default App;
