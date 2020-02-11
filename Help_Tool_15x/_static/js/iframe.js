$(function () {
    $('iframe').each(function () {
        var iframe = $(this)
        iframe.css('width', '100%')
        iframe.css('overflow', 'hidden')
        var resizeHandler = function () {
            iframe.css('height', iframe.outerWidth() * 0.75)
        }
        $(window).resize(resizeHandler)
        resizeHandler(iframe);
        setTimeout(resizeHandler, 1000);
    })
})