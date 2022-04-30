import $ from "jquery";

export default function () {
    console.log("find");
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")')
        }
    })
}