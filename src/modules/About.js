/**
 * Created by Administrator on 2017/6/2 0002.
 */
import React, { Component } from 'react';

class About extends Component{

    constructor(props, context) {
        super(props, context);
        this.id = ""+ (props.location.query) ? props.location.query.id : null;
        this.name = ""+ (props.location.query) ? props.location.query.name : null;

    }

    render() {
        return(
            <div>
                <h2>About</h2>
                <h3>{this.id}</h3>
                <h3>{this.name}</h3>
            </div>
        );
    }

}

export default About;

