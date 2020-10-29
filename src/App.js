import React from 'react';
import Search from "./components/firstHomework/search/search";
import RandomOutput from "./components/firstHomework/randomOutput/randomOutput";
import './App.css';
import List from "./components/practice/list/list";
import Form from "./components/form/form";
import './components/form/form.css'





function App() {
    return (
        <div className='wrapper'>
            {/*<Search text='Test' />*/}
            {/*<RandomOutput />*/}
            {/*<List className='list'/>*/}
            <Form />
        </div>

    )
}

export default App;
