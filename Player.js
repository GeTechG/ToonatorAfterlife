let id = $('#extension').attr('data-id');

$.getScript(id + 'player/ToonatorPlayer.js', LaunchDaBomb);

function LaunchDaBomb()
{
    let s = [], data = {};
    if(!$('#player_container').attr('toon-dra-id'))
    {
        s = $('#player_container param[name="movie"]').val().split('?')[1];
        data = JSON.parse('{"' + decodeURI(s).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    }
    else
    {
        data['v'] = $('#player_container').attr('toon-dra-id');
        data['o'] = $('#player_container').attr('toon-options');
        
    }
    //let lang = $('#draw_container param[name="movie"]').val().split('.swf')[0].split('draw31')[1];
    //data['lang'] = (lang ? lang : 'ru');
    console.log(data);
    $('#player_container').empty();
    lime.embed ('ToonatorPlayer', 'player_container', 0, 0, { rootPath: id + 'player/', parameters: data });
}