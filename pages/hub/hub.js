(function () {
    var path = function (fileName) {
        return 'pages/hub/images/' + fileName;
    };
    var myData = new WinJS.Binding.List([
        { title: 'Fire Hydrant', text: 'Red', picture: path('circle_list1.jpg') },
        { title: 'Fire Hydrant', text: 'Yellow', picture: path('circle_list2.jpg') },
        { title: 'Pothole Cover', text: 'Gray', picture: path('circle_list3.jpg') },
        { title: 'Sprinkler', text: 'Yellow', picture: path('circle_list4.jpg') },
        { title: 'Electrical Charger', text: 'Yellow', picture: path('circle_list5.jpg') },
        { title: 'Knob', text: 'Red', picture: path('circle_list6.jpg') },
        { title: 'Fire Hydrant', text: 'Red', picture: path('circle_list1.jpg') },
        { title: 'Fire Hydrant', text: 'Yellow', picture: path('circle_list2.jpg') },
        { title: 'Pothole Cover', text: 'Gray', picture: path('circle_list3.jpg') },
        { title: 'Fire Hydrant', text: 'Red', picture: path('circle_list1.jpg') },
        { title: 'Fire Hydrant', text: 'Yellow', picture: path('circle_list2.jpg') },
        { title: 'Pothole Cover', text: 'Gray', picture: path('circle_list3.jpg') }
    ]);

    WinJS.UI.Pages.define('pages/hub/hub.html', {
        ready: function (element, options) {
            $('#createNavBar')[0].winControl.hide();
            return this;
        },
        myData: {
            get: function () {
                return myData;
            }
        }
    });
})();
//# sourceMappingURL=hub.js.map
