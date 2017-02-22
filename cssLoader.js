import {Component} from 'react';

export default class CssLoader extends Component {

    constructor(props) {
        super(props);
        var cb = function() {
            var a = document.createElement("link");
            a.rel = "stylesheet";
            a.href = this.props.link;
            var b = document.getElementsByTagName("head")[0];
            b.parentNode.insertBefore(a, b)
        };
        var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
        if (raf) {
            raf(cb)
        } else {
            window.addEventListener("load", cb)
        };
    }


    render() {
        return (
            <script></script>
        );
    }
}
