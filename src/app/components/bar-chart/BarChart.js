import React, { Component } from 'react';
import BarChartService from './BarChartService';

class BarChart extends Component {
    state = {
        posts: [],
        comments: []
    };

    componentDidMount() {
        BarChartService.readPosts().then( res => {
            const posts = res.data;
            this.setState({posts});
        });

        BarChartService.readPosts().then( res => {
            const comments = res.data;
            this.setState({comments});
        });        
    }

    render () {
        return (
            <div>
                <h2> Wlecome to bar charts components</h2>
                    {
                        this.state.posts.map(post => 
                            <p key={post.id}>{post.title}</p>
                    )
                    }

                    <h2>Comments</h2>
                    {
                        this.state.comments.map(post => 
                            <p key={post.id}>{post.body}</p>
                        )
                    }
            </div>
        )
    };
}

export default BarChart;