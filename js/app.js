/// <reference path="typings/tsd.d.ts" />
$(function () {
    // WinJS.UI.Rating
    WinJS.UI.processAll().done(function () {
        $('#ratingCtrl').on('change', function () {
            console.log(this.winControl.userRating);
        });
    });

    // WinJS.UI.Bindings
    (function () {
        var myBlogsData = {
            pageTitle: "monoe’s blog",
            url: 'http://blogs.msdn.com/b/osamum',
            description: 'MS Web技術のよもやま話',
            fontSize: '30px',
            fontColor: 'green',
            backgroundColor: 'red'
        };
        var dataBind = function () {
            WinJS.Binding.processAll($('#myBlogLink')[0], myBlogsData);
        };
        $('#bindColor').on('change keyup', function () {
            myBlogsData.backgroundColor = $(this).val();
            console.log(myBlogsData.backgroundColor);
            dataBind();
        });
        dataBind();
    })();

    // WinJS.UI.ListView
    (function () {
    });
});
//# sourceMappingURL=app.js.map
