const mainContainer = document.querySelector('#root')

const reactElement ={
    type: 'a',
    props: {
        href: 'https://google.com',
        trget: '_blank'
    },
    content: 'Click on me to navigate google page'
}

function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.content
    domElement.setAttribute('href' , reactElement.props.href)
    domElement.setAttribute('target' , reactElement.props.target)
    

    mainContainer.appendChild(domElement)
}

customRender(reactElement, mainContainer)

