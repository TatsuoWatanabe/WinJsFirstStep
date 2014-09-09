/// <reference path="typings/tsd.d.ts" />
$(function () {
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
        var path = function (fileName) {
            return './images/fruits/' + fileName;
        };
        var itemArray = [
            { title: 'Marvelous Mint', text: 'Gelato', picture: path('60Mint.png') },
            { title: 'Succulent Strawberry', text: 'Sorbet', picture: path('60Strawberry.png') },
            { title: 'Banana Blast', text: 'Low-fat frozen yogurt', picture: path('60Banana.png') },
            { title: 'Lavish Lemon Ice', text: 'Sorbet', picture: path('60Lemon.png') },
            { title: 'Creamy Orange', text: 'Sorbet', picture: path('60Orange.png') },
            { title: 'Very Vanilla', text: 'Ice Cream', picture: path('60Vanilla.png') },
            { title: 'Banana Blast', text: 'Low-fat frozen yogurt', picture: path('60Banana.png') },
            { title: 'Lavish Lemon Ice', text: 'Sorbet', picture: path('60Lemon.png') }
        ];

        var items = [];

        while (items.length < 160) {
            itemArray.forEach(function (item) {
                return items.push(item);
            });
        }

        WinJS.Namespace.define('Sample.ListView', {
            data: new WinJS.Binding.List(items)
        });
    })();

    // WinJS.UI.processAll
    WinJS.UI.processAll().done(function () {
        // WinJS.UI.Rating
        $('#ratingCtrl').on('change', function () {
            console.log(this.winControl.userRating);
        });
    });
});
//# sourceMappingURL=app.js.map
