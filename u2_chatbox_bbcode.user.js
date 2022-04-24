// ==UserScript==
// @name         U2聊天框添加BBCODE按钮
// @namespace    https://u2.dmhy.org/
// @version      0.0.1
// @description  聊天框添加BBCODE按钮
// @author       アイスカユキ
// @match        *://u2.dmhy.org/torrents.php*
// @match        *://u2.dmhy.org/shoutwindow.php*
// @icon         https://u2.dmhy.org/favicon.ico

// ==/UserScript==

//初版测试没有实时预览，后续再完善

(function () {
    'use strict';
    var bb_tag = $('[name="shbox"] > div');
    var btn_pre = '<a><addr title="例子：';
    var btn_min = '"><addr><input class="bbcode" id="';
    var btn_aft = '" type="button" value="';
    var btn_fin = '"></a>';

    var btn_list = '<span style="font-weight: bold;bottom: 3px;position: relative;font-size: 14px;">聊天常用：</span>';
	btn_list += btn_pre+'[b]这是粗体。[/b]'+btn_min+'b'+btn_aft+'粗体'+btn_fin;
    btn_list += btn_pre+'[i]这是斜体。[/i]'+btn_min+'i'+btn_aft+'斜体'+btn_fin;
    btn_list += btn_pre+'[u]这是下划线。[/u]'+btn_min+'u'+btn_aft+'下划线'+btn_fin;
    btn_list += btn_pre+'[s]这是删除线。[/s]'+btn_min+'s'+btn_aft+'删除线'+btn_fin;
    btn_list += btn_pre+'[color=red/#RGB]默认红色。[/color]'+btn_min+'color'+btn_aft+'颜色'+btn_fin;
    btn_list += btn_pre+'[size=4]这是4号字的文字。[/size]'+btn_min+'size'+btn_aft+'大小'+btn_fin;
    btn_list += btn_pre+'[url]网站链接[/url]'+btn_min+'url'+btn_aft+'超链接'+btn_fin;
    btn_list += btn_pre+'[url=链接]文本[/url]'+btn_min+'urlt'+btn_aft+'文本链接'+btn_fin;
    btn_list += btn_pre+'[img]图片链接[/img]'+btn_min+'img'+btn_aft+'插入图片'+btn_fin;
    btn_list += btn_pre+'[code]这是代码文本。[/code]'+btn_min+'code'+btn_aft+'代码'+btn_fin;
    btn_list += btn_pre+'[spoiler="剧透是不可能的！"]真的！[/spoiler]'+btn_min+'spoiler'+btn_aft+'自定剧透'+btn_fin;

    bb_tag.prepend(btn_list);

    $(".bbcode").click(function(){
        var btn_click = $(this).attr("id");
        var text;
        switch(btn_click){
        case ('b'):
            text = '[b][/b]';
            break;
        case ('i'):
            text = '[i][/i]';
            break;
        case ('u'):
            text = '[u][/u]';
            break;
        case ('s'):
            text = '[s][/s]';
            break;
        case ('color'):
            text = '[color=red][/color]';
            break;
        case ('size'):
            text = '[size=][/size]';
            break;
        case ('url'):
            text = '[url][/url]';
            break;
        case ('urlt'):
            text = '[url=][/url]';
            break;
        case ('img'):
            text = '[img][/img]';
            break;
        case ('code'):
            text = '[code][/code]';
            break;
        case ('spoiler'):
            text = '[spoiler=""][/spoiler]';
            break;
    }
        $("#shbox_text").val( $("#shbox_text").val()+ text);
    })

    $(".bbcode").css({"display":"inline-block",
                      "position":"relative",
                      "bottom":"4px",
                      "margin-right":"1px",
                      "padding":"2px"
                     });
    $(".eg").css({"display":"inline-block",
                  "position":"relative",
                      "bottom":"-15px",
                      "left":"100px"
                     });

})();