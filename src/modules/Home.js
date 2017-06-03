/**
 * Created by Administrator on 2017/6/3 0003.
 */
import React, { Component } from 'react';

export default React.createClass({

    // ask for `router` from context
    contextTypes: {
        router: React.PropTypes.object
    },

    render(){
        return(
            <div>
                <h2>home</h2>
                <button onClick={(e) => {
                    this.handleSubmit(e);
                }}>
                    进入下一个页面
                </button>
            </div>
        );
    },

    handleSubmit(event) {
        this.context.router.push({
            pathname: '/about',
            query: { id: "111-111",
                name:"about name",
            },
        })
    },
})