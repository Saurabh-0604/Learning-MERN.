import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


// function CustomApp() {
//   return (
//     <>
//       <h1>Hello World | vite</h1>
//       <p>hey its a paragraph demo</p>
//     </>
//   );
// }

const CustomReactElement ={
    type: 'a',
    props: {
        href: 'https://google.com',
        trget: '_blank'
    },
    content: 'Click on me to navigate google page'
}

const AnotherElement =(
    <a href='https://google.com' target='_blank'>Click on me to navigate google page</a>
)

const myName = "My name is Saurabh Gupta"

const ReactElem = React.createElement('a',{
        href: 'https://google.com',
        trget: '_blank'
    }, 'Click on me to navigate google page',myName)

createRoot(document.getElementById('root')).render(


    // <App/>

    // <CustomApp />
    // CustomApp()

    // <CustomReactElement/>
    // CustomReactElement()
    // CustomReactElement

    // <AnotherElement/>
    // AnotherElement()
    // AnotherElement

    // <ReactElem/>
    ReactElem

)
