window.addEventListener('load', (event) => {
    console.log('load')
    // document.querySelectorAll('a.nav').forEach(el => {
    //     el.addEventListener('click', e => {
    //         document.getElementById('content').innerHTML = e.target.innerHTML
    //     })
    // })

    document.querySelectorAll('.read-more').forEach(d => {
        console.log(d)
        d.addEventListener('click', function (e) {
            const el = e.target
            e.preventDefault()
            console.log(el)
            el.parentElement.querySelector('.hidden').classList.remove('hidden')
            // $(el).find('.read-more').text(function (index, text) {
            //     if (text === 'more info...') {
            //         return 'collapse'
            //     } else {
            //         return 'more info...'
            //     }
            // })
            // $(el).find('img').each(function (el) {
            //     var src
            //     src = $(el).attr('lazy-src')
            //     return $(el).attr('src', src)
            // })
        })
    })
    // $('.read-more-items .hidden').addEventListener('click', function (e) {
    //     return e.stopPropagation()
    // })
})
