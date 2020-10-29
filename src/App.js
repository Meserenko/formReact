import React from 'react';
import Search from "./components/firstHomework/search/search";
import RandomOutput from "./components/firstHomework/randomOutput/randomOutput";
import './App.css';
import List from "./components/practice/list/list";
import Form from "./components/form/form";






function App() {
    return (
        <div className='wrapper'>
            <h1>SIGN IN TO YOUR ACCOUNT</h1>
            {/*<Search text='Test' />*/}
            {/*<RandomOutput />*/}
            {/*<List className='list'/>*/}
            <Form />
        </div>

    )
}

export default App;
