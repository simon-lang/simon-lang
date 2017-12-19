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
    if (el && route.controller) {
        // el.innerHTML = template(route.templateId, new route.controller())
        // temporary solution instead of real templating
        el.querySelectorAll('.view').forEach(view => view.classList.add('hidden'))
        el.querySelector('.view.view-' + route.templateId).classList.remove('hidden')
        const c = new route.controller
        document.title = c.title || 'scratch'
    }
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)

export default addRoute


// templating
if (supportsTemplate()) {
    forEach(Object.keys(data), function (i) {
        var review = data[i];
        var t = document.querySelector('#review-template');
        var date = new Date(review.created_at);
        t.content.querySelector('.title').textContent = review.title;
        t.content.querySelector('.message').textContent = review.content;
        var clone = document.importNode(t.content, true);
        document.getElementById('reviews').appendChild(clone);
    });
}
