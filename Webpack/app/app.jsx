/**
 * Created by hzgongke on 2016/4/11 0011.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search';
import Plist from './components/plist';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "keyword": ""
        }
        this.refreshKeyword = this.refreshKeyword.bind(this);
    }
    refreshKeyword(name) {
        this.setState({
            "keyword": name
        })
    }
    render() {
        return (
            <div className="ctn">
                <h3>搜索Github用户s</h3>
                <Search sendAction={this.refreshKeyword}></Search>
                <Plist keyword={this.state.keyword}></Plist>
            </div>
        );
    }
}