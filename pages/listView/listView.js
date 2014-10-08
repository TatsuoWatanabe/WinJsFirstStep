(function () {
    var dataSource = (function () {
        var path = function (fileName) {
            return 'pages/listView/images/fruits/' + fileName;
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

        while (items.length < 40) {
            itemArray.forEach(function (item) {
                return items.push(item);
            });
        }

        return (new WinJS.Binding.List(items)).dataSource;
    })();

    WinJS.UI.Pages.define('pages/listView/listView.html', {
        ready: function (element, options) {
            $('#listView')[0].winControl.itemDataSource = dataSource;
            return this;
        }
    });
})();
//# sourceMappingURL=listView.js.map
