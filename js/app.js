(function () {$(document).on('ready', function () {

$('#navigation a:first').tab('show');
function showInIframe(link) {
    var $iframe = $('<iframe src="' + link + '" width="100%" height="100%"></iframe>'),
        $project = $('#project');
    $project.html($iframe);
    $project.tab('show');
}

document.hguilla = {
    showInIframe: showInIframe
};

})})();
