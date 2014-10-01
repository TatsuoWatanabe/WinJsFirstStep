(() => {
    var toggleValues = {};
    
    var onToggled = (eventInfo) => {
        var ctrlHost: any = eventInfo.target;
        var toggle: WinJS.UI.ToggleSwitch = ctrlHost.winControl;
        toggleValues[toggle.title] = toggle.checked; // Save the value.
        $(ctrlHost).next('p').text(toggle.title + ' Current status: ' + (toggle.checked ? 'on' : 'off'));
    };

    // To protect against untrusted code execution, all functions are required to be marked as supported for processing before they can be used inside a data-win-options attribute in HTML markup.
    WinJS.Utilities.markSupportedForProcessing(onToggled);
    WinJS.Namespace.define('Sample.ToggleSwitch', {
        onToggled: onToggled
    });

    WinJS.UI.Pages.define('/pages/toggleSwitch/toggleSwitch.html', {
        ready: function (element, options) {
            $('#toggleList').find('[data-win-control="WinJS.UI.ToggleSwitch"]').each(function() {
                var toggle: WinJS.UI.ToggleSwitch = this.winControl;
                toggle.checked = toggleValues[toggle.title]; // Load the saved values.
            });
            
            return this;
        }
    });
})(); 