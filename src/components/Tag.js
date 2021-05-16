import React, { Component } from 'react';

class Tag extends Component { 
    render() {
        return(
            <p style={{fontSize: "0.96rem", margin: "0.12em"}} className="tag">
                {this.props.children}
            </p>
        );
    }
}

export default Tag;