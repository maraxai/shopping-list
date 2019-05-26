import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th></th>
                <th></th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.listOfItems.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td><button onClick={() => props.deleteItem(index)}>got it</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { listOfItems, deleteItem } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody listOfItems={listOfItems} deleteItem={deleteItem} />
            </table>
        );
    }
}

export default Table;
