(() => {
    var myData = new WinJS.Binding.List([
        { title: "Fire Hydrant", text: "Red", picture: "/pages/hub/images/circle_list1.jpg" },
        { title: "Fire Hydrant", text: "Yellow", picture: "/pages/hub/images/circle_list2.jpg" },
        { title: "Pothole Cover", text: "Gray", picture: "/pages/hub/images/circle_list3.jpg" },
        { title: "Sprinkler", text: "Yellow", picture: "/pages/hub/images/circle_list4.jpg" },
        { title: "Electrical Charger", text: "Yellow", picture: "/pages/hub/images/circle_list5.jpg" },
        { title: "Knob", text: "Red", picture: "/pages/hub/images/circle_list6.jpg" },
        { title: "Fire Hydrant", text: "Red", picture: "/pages/hub/images/circle_list1.jpg" },
        { title: "Fire Hydrant", text: "Yellow", picture: "/pages/hub/images/circle_list2.jpg" },
        { title: "Pothole Cover", text: "Gray", picture: "/pages/hub/images/circle_list3.jpg" },
        { title: "Fire Hydrant", text: "Red", picture: "/pages/hub/images/circle_list1.jpg" },
        { title: "Fire Hydrant", text: "Yellow", picture: "/pages/hub/images/circle_list2.jpg" },
        { title: "Pothole Cover", text: "Gray", picture: "/pages/hub/images/circle_list3.jpg" }
    ]);
    WinJS.UI.Pages.define("/pages/hub/basichub.html", {
        myData: {
            get: function () {
                return myData;
            }
        }
    });
})();