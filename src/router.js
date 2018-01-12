var routes = {}

function addRoute(path, templateId, controller) {
    routes[path] = { templateId: templateId, controller: controller }
}

var el = null

function router() {
    el = el || document.getElementById('view')
    var url = location.hash.slice(1) || '/'
    var route = routes[url]
    if (el && route && route.controller) {
        el.querySelectorAll('section').forEach(view => view.classList.add('hidden'))
        el.querySelector('#' + route.templateId).classList.remove('hidden')
        document.querySelectorAll('nav a').forEach(el => {
            const active = el.getAttribute('href') === `#${url}`
            el.classList.toggle('tabs__item--selected', active)
        })
    }
}

// export default addRoute

const defaultController = () => {
    // ...
}

addRoute('/', 'home', defaultController)
addRoute('/home', 'home', defaultController)
addRoute('/employment', 'employment', defaultController)
addRoute('/portfolio', 'portfolio', defaultController)
addRoute('/skills', 'skills', defaultController)
addRoute('/about', 'about', defaultController)

window.addEventListener('hashchange', router)
window.addEventListener('load', () => {
    router()
})
