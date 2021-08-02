let id = $('#extension').attr('data-id');

$.getScript(id + 'editor/ToonatorEditor.js', LaunchDaBomb);

function LaunchDaBomb()
{
    let s = $('#draw_container param[name="movie"]').val().split('?')[1];
    let data = JSON.parse('{"' + decodeURI(s).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    let lang = $('#draw_container param[name="movie"]').val().split('.swf')[0].split('draw31')[1];
    data['lang'] = (lang ? lang : 'ru');
    //console.log(data, lang);
    $('#draw_container').empty();
    lime.embed ('ToonatorEditor', 'draw_container', 0, 0, { rootPath: id + 'editor/', parameters: data });
}