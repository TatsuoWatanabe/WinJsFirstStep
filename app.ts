/// <reference path="js/typings/tsd.d.ts" />

$(() => {
    // WinJS.UI.Rating
    WinJS.UI.processAll().done(() => {
        $('#ratingCtrl').on('change', function() {
            console.log(this.winControl.userRating);
        });
    });

    // WinJS.UI.Bindings
    (() => {
        var myBlogsData = {
            pageTitle      : "monoe’s blog",
            url            : 'http://blogs.msdn.com/b/osamum',
            description    : 'MS Web技術のよもやま話',
            fontSize       : '30px',
            fontColor      : 'green',
            backgroundColor: 'red' 
        };
        var dataBind = () => {
            WinJS.Binding.processAll($('#myBlogLink')[0], myBlogsData);
        };
        $('#bindColor').on('change keyup', function() {
            myBlogsData.backgroundColor = $(this).val();
            console.log(myBlogsData.backgroundColor);
            dataBind();
        });
        dataBind(); 
    })();
});