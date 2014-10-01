(function() {
    WinJS.UI.Pages.define('pages/home.html', {
        ready: (element, options) => {
            WinJS.Utilities.query('button.btn-navigate').listen('click', function(eventInfo) {
                var btn: HTMLButtonElement = eventInfo.target;
                var data: { url: string } = $(btn).data();

                WinJS.Navigation.navigate(data.url);
            }, false);

            return this;
        }
    });
})(); 