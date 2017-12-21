window.addEventListener('load', (event) => {

    document.querySelectorAll('.read-more').forEach(d => {
        d.addEventListener('click', function (e) {
            const el = e.target
            e.preventDefault()
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
})
