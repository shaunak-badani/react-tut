import React, { Component } from 'react';
import './post_data.css';
import Button from '@material-ui/core/Button';

export default class Post_data extends Component {

    constructor(){
        super();
        this.state = {
            "post_data" : [],
            "name" : "sdfasdf",
            loading : false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.setState({ "post_data" : json, loading: true }));
    }

    render() {
        let welcome_component = <h1>Hatt bsdk</h1>;
        if(this.state.name === "Shaunak") {
            welcome_component = <div>Hello</div>
        };
        if(!this.state.loading) 
        return <div>Loading</div>
        return (
            <div>
                {this.state.post_data.map(post => (
                    <div className="post-box">
                        <h1>This is {post.title}</h1>
                        <p>This is {post.body}.</p>
                    </div>
                ))}
                {welcome_component}
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
            
        )
    }
}
