let id = chrome.extension.getURL('/');

if(location.href.indexOf('draw') != -1)
{
    $('<div>', {
        'id': 'extension',
        'data-id': id
    }).appendTo('head');

    $('head').append('<script src="' + id + 'Launcher.js"></script>');
    $('body').css({'user-select': 'none'});

    //$('head').append('<style>body {user-select: none}</style>');

    if(location.href.indexOf('multator.ru') != -1)
    {
        $('.rightpanel').append(`
        <br/>
        <h1>Попробуйте также <a href="https://toonio.ru">Тунио</a></h1>
        <p>(это послание от создателя расширения «Мультатор Воскресе»)</p>
        `);
    }
    else if(location.href.indexOf('toonator.com') != -1)
    {
        $('.rightpanel').append(`
        <br/>
        <h1>Also try <a href="https://toonio.ru">Toonio</a></h1>
        <p>(this is a message from the creator of the «Toonator Afterlife» extension)</p>
        `);
    }
}


if($('#player_container').length)
{
    $('<div>', {
        'id': 'extension',
        'data-id': id
    }).appendTo('head');

    
    $('head').append('<script src="' + id + 'Player.js"></script>');

    /*let d = $('.player embed').attr('src').split('?v=')[1].split('&')[0];

    $('.player').attr('toon-dra-id', d);
    $('.player').attr('toon-options', 'expand: 1');
    $('.player').html('<div class="player-html"><div class="viewport" style="width: 610px; height: 310px; left: 0px; top: 0px;"><canvas class="frame" width="610" height="310"></canvas><canvas class="canvas" width="600" height="300"></canvas></div><div class="toolbar"><div class="leftbar"><canvas class="play-button" width="30" height="30"></canvas></div><div class="seekbar" style="display: inline-block;"><canvas width="495" height="30"></canvas><canvas class="seekbar-control" width="30" height="30" style="left: 211.364px;"></canvas></div><div class="rightbar"><canvas class="expand-button" width="30" height="30"></canvas><canvas class="fullscreen-button" width="30" height="30"></canvas></div></div><object tabindex="-1" type="text/html" data="about:blank" style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;"></object></div>');
    
    $('head').append('<script src="/js/app.bundle.js"></script>');*/
}