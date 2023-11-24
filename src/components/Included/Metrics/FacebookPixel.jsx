import { Component } from 'react';
import ReactPixel from 'react-facebook-pixel';

export class FacebookPixel extends Component {
    componentDidMount() {
        ReactPixel.init('868651238324672');
        ReactPixel.pageView();
        ReactPixel.track('PageView')
    }

    render() {
        return null;
    }
}
