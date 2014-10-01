(function () {
    var myBlogsData = WinJS.Binding.as({
        html: "monoe’s blog",
        href: 'http://blogs.msdn.com/b/osamum',
        title: 'MS Web技術のよもやま話',
        fontSize: '30px',
        fontColor: 'green',
        cursor: 'pointer',
        backgroundColor: 'red'
    });

    WinJS.UI.Pages.define('pages/bindings/bindings.html', {
        ready: function (element, options) {
            WinJS.Binding.processAll($('#myBlogLink')[0], myBlogsData);

            $('#bindColor').on('change keyup', function () {
                myBlogsData.backgroundColor = $(this).val();
            });

            return this;
        }
    });
})();
//# sourceMappingURL=bindings.js.map
