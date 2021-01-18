import React from 'react';

export default class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        };
    }

    componentDidMount = () => {
        getEvents()
    }

    getEvents() {
        let that = this;
        function start() {
            gapi.client.init({
                'apiKey': 'AIzaSyDJrpQjRFJRNSH9Z7eihGMettA3lZVofy4'
            }).then(function () {
                return gapi.client.request({
                    'path': `https://www.googleapis.com/calendar/v3/calendars/${'berkeley.edu_edsdsltid0bqrcn7bghu9j0mmk@group.calendar.google.com'}/events`,
                })
            }).then((response) => {
                let events = response.result.items
                that.setState({
                    events
                }, () => {
                    console.log(that.state.events);
                })
            }, function (reason) {
                console.log(reason);
            });
        }
        gapi.load('client', start)
    }

    render() {
        return (
            {
                this: state.events.map(function (event) {
                    return (
                        { event: summary }
                    )
                })
            }
        )
    }
}
