(function(app) {
    app.value("presentations", [
            {
                title: "Windows 8.1 Sockets",
                venue: "Atlanta Windows Store Apps Users Group",
                description: "Although Windows Store apps run in a security sandbox, the Windows Runtime provides a rich set of APIs that enable connectivity over sockets. WinRT supports the new HTML5 WebSocket specification but also allows apps to connect via TCP and UDP for real-time streaming connectivity. Join Jeremy Likness as he walks through several examples of apps using socket protocols to establish communications and demonstrates the ease of interfacing with the Windows Runtime sockets APIs.",
                location: "Alpharetta, GA",
                date: new Date(2014, 4, 7),
                slideShare: "https://www.slideshare.net/jeremylikness/windows-81-sockets"
            },
            {
                title: "The Windows Runtime and the Web",
                venue: "Chattanooga .NET Users Group",
                description: "The Windows Runtime is the runtime that drives Windows 8 and the new Windows Store apps. The runtime enables developers to build rich client apps that run natively on Window 8 devices. In this session, Jeremy Likness explores the various built-in components and APIs that enable Windows Store apps to connect to SOAP, REST, and OData endpoints and syndicate RSS and Atom feeds. Learn how these tools make it easy to build Windows Store apps that are alive and connected to the internet.",
                location: "Chattanooga, TN",
                date: new Date(2013, 12, 10),
                slideShare: "https://www.slideshare.net/jeremylikness/likness-win-rt-and-the-web"
            },
            {
                title: "My XML is Alive! An Intro to XAML",
                venue: "Gwinnett Georgia Microsoft Users Group",
                description: "Extensible Application Markup Language, better known as XAML (pronounced 'zammel'), is a language developed by Microsoft that is based on XML. It provides a declarative way to instantiate rich object graphs – in other words, through XAML you are able to create instances of classes, set properties, and define behaviors. Most commonly used to describe the user interface for technologies like Silverlight, WPF, and Windows 8.1, XAML provides a separation of concerns between the presentation and business logic for an app and gives the designer the flexibility to create experiences that interact with code through data-binding. This enables design-time data and true parallel workflows between designers and developers. Jeremy Likness will walk you through XAML, including how it is used by various technologies and the advantages it provides when building applications.",
                location: "Lawrenceville, GA",
                date: new Date(2013, 10, 10),
                slideShare: "https://www.slideshare.net/jeremylikness/ggmug-likness-my-xml-is-alive-intro-to-xaml"
            },
            {
                title: "WinRT and the Web: Keeping Windows Store Apps Live and Connected",
                venue: "DevLink",
                description: "The Windows Runtime is the runtime that drives Windows 8 and the new Windows Store apps. The runtime enables developers to build rich client apps that run natively on Window 8 devices. In this session, Jeremy Likness explores the various built-in components and APIs that enable Windows Store apps to connect to SOAP, REST, and OData endpoints and syndicate RSS and Atom feeds. Learn how these tools make it easy to build Windows Store apps that are alive and connected to the internet.",
                location: "Chattanooga, TN",
                date: new Date(2013, 8, 30),
                slideShare: "http://www.slideshare.net/jeremylikness/winrt-and-the-web-keeping-windows-store-apps-alive-and-connected"
            }
        ]);
})(angular.module("myApp"));