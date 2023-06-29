import { Component } from 'react';

class KommunicateChat extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        (function(d, m){
                let kommunicateSettings = 
                {"appId":"1233cba650f8d15c7272f548b89dd61b","popupWidget":true,"automaticChatOpenOnNavigation":true};
                let s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                let h = document.getElementsByTagName("head")[0]; h.appendChild(s);
                window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
        /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
    }

    render() {
        return (
            <></>
        )
    }
}

export default KommunicateChat;