/// <reference path="typings/tsd.d.ts" />
declare var Sample: any;
$(() => {    
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

    // WinJS.UI.ListView
    (() => {
        var itemArray = [
            { title: 'Marvelous Mint',       text: 'Gelato', picture: '/images/fruits/60Mint.png' },
            { title: 'Succulent Strawberry', text: 'Sorbet', picture: '/images/fruits/60Strawberry.png' },
            { title: 'Banana Blast',         text: 'Low-fat frozen yogurt', picture: '/images/fruits/60Banana.png' },
            { title: 'Lavish Lemon Ice',     text: 'Sorbet', picture: '/images/fruits/60Lemon.png' },
            { title: 'Creamy Orange',        text: 'Sorbet', picture: '/images/fruits/60Orange.png' },
            { title: 'Very Vanilla',         text: 'Ice Cream', picture: '/images/fruits/60Vanilla.png' },
            { title: 'Banana Blast',         text: 'Low-fat frozen yogurt', picture: '/images/fruits/60Banana.png' },
            { title: 'Lavish Lemon Ice',     text: 'Sorbet', picture: '/images/fruits/60Lemon.png' }
        ];

        var items = [];

        // Generate 160 items
        while (items.length < 160) {
            itemArray.forEach((item) => items.push(item));
        }

        WinJS.Namespace.define('Sample.ListView', {
            data: new WinJS.Binding.List(items)
        });
    })();

    // WinJS.UI.processAll
    WinJS.UI.processAll().done(() => {

        // WinJS.UI.Rating
        $('#ratingCtrl').on('change', function() {
            console.log(this.winControl.userRating);
        });

    });
});