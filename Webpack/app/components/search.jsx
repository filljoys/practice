import React from 'react';
import ReactDOM from 'react-dom';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch() {
        let name = ReactDOM.findDOMNode(this.refs.name).value;
        if (name === '') {
            return;
        }
        this.props.sendAction(name);
    }
    render() {
        return (
            <div className="searchBox">
                <input type="text" ref="name" placeholder="请输入姓名："/>
                <button onClick={this.handleSearch}>搜索</button>
            </div>
        )
    }
}