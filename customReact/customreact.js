const root = document.querySelector('#root')

const customElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    content : 'Click me to go visit google'
}

function createElement(customElement, root)
{
    const element = document.createElement(customElement.type)
    element.setAttribute('href', customElement.props.href)
    element.setAttribute('target', customElement.props.target)
    element.innerHTML = customElement.content
    root.appendChild(element)
}

createElement(customElement, root)