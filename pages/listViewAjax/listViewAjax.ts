(() => {
    WinJS.UI.Pages.define('/pages/listViewAjax/listViewAjax.html', {
        ready: function (element, options) {
            WinJS.xhr({
                url         : '/pages/listViewAjax/data.json',
                responseType: 'json'
            }).done((result: XMLHttpRequest) => {
                var json = result.response;
                var data = json.sort((a, b) => a.index < b.index ? -1 : 1);
                var listViewCtrl = WinJS.Utilities.query('#listViewAjax')[0].winControl;
                listViewCtrl.itemDataSource = (new WinJS.Binding.List(data)).dataSource;
            });

            return this;
        }
    });
})();