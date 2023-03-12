//defining components 

// Header Component
class MyHeader extends HTMLElement {
    connecttedCallback() {
        this.innerHTML = `

        `
    }
}


// exporting components
// customElements.define('Tag_name', CLass_name) 

// header
customElements.define('my-header', MyHeader)

// com
customElements.define('component', Component) 