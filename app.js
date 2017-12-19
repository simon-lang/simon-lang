let $ = document.querySelectorAll

window.addEventListener('load', (event) => {
    // document.querySelectorAll('a.nav').forEach(el => {
    //     el.addEventListener('click', e => {
    //         document.getElementById('content').innerHTML = e.target.innerHTML
    //     })
    // })

    $('.read-more-items > li').addEventListener('click', function (el) {
        e.preventDefault()
        $(el).find('.hidden').toggle()
        $(el).find('.read-more').text(function (index, text) {
            if (text === 'more info...') {
                return 'collapse'
            } else {
                return 'more info...'
            }
        })
        return $(el).find('img').each(function (el) {
            var src
            src = $(el).attr('lazy-src')
            return $(el).attr('src', src)
        })
    })
    $('.read-more-items .hidden').addEventListener('click', function (e) {
        return e.stopPropagation()
    })
})
