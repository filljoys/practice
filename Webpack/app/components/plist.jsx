import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';
export default class Plist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "loading": false,
            "list": []
        }
    }
    componentDidMount() {
        this.setState({
            "firstView": true
        });
    }
    componentWillReceiveProps(nextProps) {
        let keyword = nextProps.keyword;
        let _this = this;
        this.setState({
            "loading": true,
            "firstView": false
        });
        let url = `https://api.github.com/search/users?q=${keyword}`;
        $.get(url, function(data) {
            _this.setState({
                "loading": false,
                "list": data.items
            });
        })
    }
    render() {
        const imgStyle = {
            width: "50px"
        }
        if (this.state.firstView) {
            return (
                <h2>输入姓名的关键词开始搜索吧</h2>
            );
        }
        if (this.state.loading) {
            return (
                <h2>Loading result...</h2>
            );
        } else {
            if (this.state.list.length === 0) {
                return (
                    <h2>没有搜索到结果</h2>
                );
            } else {
                return (
                  <div className="cardBox">
                      {this.state.list.map(people => {
                          return (
                              <div className="card" key={people.id}>
                                  <img src={people.avatar_url} style={imgStyle}/>
                                  <p className="card_text">
                                      {people.login}
                                  </p>
                              </div>
                          );
                      })}
                  </div>
                );
            }
        }
    }
}