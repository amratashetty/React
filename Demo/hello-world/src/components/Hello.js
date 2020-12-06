import React from 'react'
const Hello = () => {
    // return(
    //     <div className = 'DummyClass'>
    //         <h1> Hello Amrata</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id : 'Hello', className :'DummyClass'},
        React.createElement('h1',null,'Hello Amrata')

    )
}
export default Hello