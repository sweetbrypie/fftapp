import React from 'react';

var gapi = require('gapi');

export default class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        };
        this.getEvents = this.getEvents.bind(this)
    }

    componentDidMount = () => {
        this.getEvents()
    }

    getEvents() {
        function start() {
            gapi.client.init({
                'apiKey': 'AIzaSyDJrpQjRFJRNSH9Z7eihGMettA3lZVofy4'
            }).then(function () {
                return gapi.client.request({
                    'path': `https://www.googleapis.com/calendar/v3/calendars/${'berkeley.edu_edsdsltid0bqrcn7bghu9j0mmk@group.calendar.google.com'}/events`,
                })
            }).then((response) => {
                let events = response.result.items
                this.setState({
                    events
                }, () => {
                    console.log(this.state.events);
                })
            }, function (reason) {
                console.log(reason);
            });
        }
        gapi.load('client', start)
    }

    render() {
        return (
            <>{
                this.state.events.map(function (event) {
                    return (
                        { event: summary }
                    )
                })
            }</>
        )
    }
}
