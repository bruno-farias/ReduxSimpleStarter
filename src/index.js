import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDvv1fVhi0EnQwgpGf1ze_qA9N5esdP2sU';

const App = () => {
    return <div>
        <SearchBar />
    </div>;
};

ReactDOM.render(<App />, document.querySelector('.container'));