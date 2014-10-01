(function () {
    var currentRating = 0;

    WinJS.UI.Pages.define('/pages/rating/rating.html', {
        ready: function (element, options) {
            var ratingCtrl: WinJS.UI.Rating = $('#ratingCtrl')[0].winControl;
            ratingCtrl.userRating = currentRating;

            $('#ratingCtrl').on('change', function() {
                currentRating = ratingCtrl.userRating;
                $('#currentRating').text('current rating is ' + ratingCtrl.userRating);
            }).change();
            
            return this;
        }
    });
})(); 