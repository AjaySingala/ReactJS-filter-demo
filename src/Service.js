import React, { Component } from 'react';

class Service extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pictures: [],
            apiData: []
        };

        this.getData = this.getData.bind(this);
        this.createData = this.createData.bind(this);
        this.submitData = this.submitData.bind(this);
    }

    getData() {
        console.log("Getting request to Fake Online REST API for Testing and Prototyping...");
        let url = "https://jsonplaceholder.typicode.com/posts/10";

        fetch(
            url, {
                method: "GET"
            }).then(function (response) {
                return response.json();
            }).then(data => {
                console.log("GET Successful: ", data);
                this.setState({ apiData: data });
            }).catch((err) => console.log(err));
    }

    createData(content) {
        console.log("Posting request to Fake Online REST API for Testing and Prototyping...");
        console.log(JSON.stringify(content));
        let url = "https://jsonplaceholder.typicode.com/posts";

        fetch(
            url, {
                method: "POST",
                body: JSON.stringify(content)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log("POST Successful: ", data);
            }).catch((err) => console.log(err));
    }

    submitData() {
        var content = {
            title: "Title",
            body: "Body"
        };

        if (content) {
            this.createData(content);
        }
        else {
            console.log("No data to POST");
        }
    }

    componentDidMount() {
        let url = "https://randomuser.me/api/?results=5";

        fetch(url)
            .then(results => {
                return results.json();
            }).then(data => {
                let pictures = data.results.map((pic) => {
                    //console.log("Key: " + pic.login.uuid);
                    return (
                        <div key={pic.login.uuid}>
                            <img src={pic.picture.medium} />
                        </div>
                    )
                })
                this.setState({ apiData: "Not yet" });
                this.setState({ pictures: pictures });
                //console.log("state", this.state.pictures);
            });
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.pictures}
                </div>
                <div>
                    <h1>Test Fake API</h1>
                    <button onClick={this.getData}>
                        API GET
                    </button>
                    <div>
                        Id: {this.state.apiData.id}
                        <br />
                        Userid: {this.state.apiData.userId}
                        <br />
                        Title: {this.state.apiData.title}
                        <br />
                        Body: {this.state.apiData.body}
                    </div>
                    <button onClick={this.submitData}>
                        API POST
                    </button>
                </div>
            </div>
        );
    }
}

export default Service;