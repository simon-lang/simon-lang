const template = id => id // TODO

var routes = {}

function addRoute(path, templateId, controller) {
    routes[path] = { templateId: templateId, controller: controller }
}

var el = null

function router() {
    el = el || document.getElementById('view')
    var url = location.hash.slice(1) || '/'
    var route = routes[url]
    console.log(url, el, url, route)
    if (el && route && route.controller) {
        // el.innerHTML = template(route.templateId, new route.controller())
        // temporary solution instead of real templating
        el.querySelectorAll('section').forEach(view => view.classList.add('hidden'))
        el.querySelector('#' + route.templateId).classList.remove('hidden')
        // const c = new route.controller
        // document.title = c.title || 'scratch'
    }
}

// export default addRoute

addRoute('/', 'home', () => {
    console.log('home')
})

addRoute('/home', 'home', () => {
    console.log('home')
})

addRoute('/employment', 'employment', () => {
    console.log('employment')
})

addRoute('/portfolio', 'portfolio', () => {
    console.log('portfolio')
})

addRoute('/skills', 'skills', () => {
    console.log('skills')
})

addRoute('/about', 'about', () => {
    console.log('about')
})

window.addEventListener('hashchange', router)
window.addEventListener('load', () => {
    router()
})

// // templating
// if (supportsTemplate()) {
//     forEach(Object.keys(data), function (i) {
//         var review = data[i];
//         var t = document.querySelector('#review-template');
//         var date = new Date(review.created_at);
//         t.content.querySelector('.title').textContent = review.title;
//         t.content.querySelector('.message').textContent = review.content;
//         var clone = document.importNode(t.content, true);
//         document.getElementById('reviews').appendChild(clone);
//     });
// }
