(function () {
    var currentRating = 0;

    WinJS.UI.Pages.define('pages/rating/rating.html', {
        ready: function (element, options) {
            $('#ratingCtrl')[0].winControl.userRating = currentRating;

            $('#ratingCtrl').on('change', function () {
                var ratingCtrl = this.winControl;
                currentRating = ratingCtrl.userRating;
                console.log('changed to ' + currentRating + '.');
                $('#currentRating').text('current rating is ' + ratingCtrl.userRating);
            }).change();

            return this;
        }
    });
})();
//# sourceMappingURL=rating.js.map
