import * as React from 'react';
import * as ReactDOM from 'react-dom';
import apiStore from "./test/apiStore";
import FeedControl from "./test/FeedControl";


// render react DOM
ReactDOM.render(
    <FeedControl apiStore={apiStore}/>,

    document.getElementById('root')
);
