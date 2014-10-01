(function () {
    WinJS.UI.Pages.define('pages/listViewAjax/listViewAjax.html', {
        ready: function (element, options) {
            WinJS.xhr({
                url: 'pages/listViewAjax/data.json',
                responseType: 'json'
            }).done(function (result) {
                var json = result.response;
                var data = (function () {
                    var jsonObj = json.sort ? json : JSON.parse(json);
                    return jsonObj.sort(function (a, b) {
                        return a.index < b.index ? -1 : 1;
                    });
                })();
                var listViewCtrl = WinJS.Utilities.query('#listViewAjax')[0].winControl;
                listViewCtrl.itemDataSource = (new WinJS.Binding.List(data)).dataSource;
            });

            return this;
        }
    });
})();
//# sourceMappingURL=listViewAjax.js.map
