// http://msdn.microsoft.com/en-us/library/windows/apps/hh465493.aspx
(function () {
   "use strict";

    var app = WinJS.Application;
    WinJS.strictProcessing();
    
    // http://azure.microsoft.com/en-us/documentation/articles/mobile-services-html-how-to-use-client-library/
    var client = new WindowsAzure.MobileServiceClient(
        "https://marpar-data-node.azure-mobile.net/",
        "ToAHQTYEzxHUKXjbcdFEdgdOAoPpeO98"
    );

    app.onactivated = function (args) {
        if (args.detail.kind === "Windows.Launch") {
            if (args.detail.previousExecutionState !== "Windows.Terminated") {
                // TODO: This application has been newly launched. Initialize
                // your application here.
                               
                var icecreamsTable = client.getTable("icecreams");
                icecreamsTable.read().done(function (results) {
                    
                    WinJS.Namespace.define("icecreams", {
                        data: new WinJS.Binding.List(results)
                    });
                    WinJS.UI.processAll();
                    
                }, function (err) {
                    alert("Error: " + err);
                });

            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();

})();