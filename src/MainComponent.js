import React, { Component } from 'react'
import axios from 'axios';
import NewsAPI from 'newsapi';

export default class MainComponent extends Component {
    constructor() {
        super();
        this.state = { articles: [] }
        this.getData = this.getData.bind(this);
    }


    getData() {
        const newsapi = new NewsAPI('62ac6a4ba0604031bb014138b149a1d0');

        // edit the endpoint with your queries for more pages on each article
        axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2018-06-02&to=2018-06-10&sortBy=popularity&pageSize=100&apiKey=62ac6a4ba0604031bb014138b149a1d0')
            .then((response) => {
                //console.log(response.data.articles);
                this.setState({ articles: response.data.articles[0] })
            })
            .catch((error) => {
                console.log(error);
            });

            // you can use this state of articles from here
            console.log(this.state.articles);

    }



    render() {
        return (
            <div>
                <button onClick={this.getData}>
                    Get Data
           </button>
              

            </div>
        )
    }
}
