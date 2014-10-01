$(function () {
    WinJS.UI.processAll().done(function () {
        // WinJS.UI.NavBar
        var $navBar = $('#createNavBar');
        var navBar = $navBar[0].winControl;

        $navBar.on('beforehide beforeshow', function (ev) {
            var marginTop = (navBar.hidden) ? '50px' : '100px';
            $('#pageHost').animate({ marginTop: marginTop }, 100);
        });

        navBar.addEventListener('invoked', function (ev) {
            var navbarCommand = ev.detail.navbarCommand;
            console.log(navbarCommand.label);
        });

        navBar.show();
    });
});
//# sourceMappingURL=index.js.map
