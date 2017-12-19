window.addEventListener('load', (event) => {
    document.querySelectorAll('a.nav').forEach(el => {
        el.addEventListener('click', e => {
            document.getElementById('content').innerHTML = e.target.innerHTML
        })
    })
})
