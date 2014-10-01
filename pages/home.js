(function () {
    var _this = this;
    WinJS.UI.Pages.define('pages/home.html', {
        ready: function (element, options) {
            WinJS.Utilities.query('button.btn-navigate').listen('click', function (eventInfo) {
                var btn = eventInfo.target;
                var data = $(btn).data();

                WinJS.Navigation.navigate(data.url);
            }, false);

            return _this;
        }
    });
})();
//# sourceMappingURL=home.js.map
