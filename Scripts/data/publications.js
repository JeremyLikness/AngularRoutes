(function(app) {
    app.value("publications", [
            {
                title: "Fundamentals of AngularJS",
                publisher: "WintellectNOW",
                description: "AngularJS is a hot topic in programming circles, and the best place to start learning about it is at the beginning. In the inaugural video in this series, Jeremy lays the groundwork for later modules by introducing scope for data-binding, controllers for MVC on the client, events, filters to format output, directives to extend the HTML vocabulary, modules to group code, services to provide application-wide functionality, and routes to enable Single Page Applications (SPA).",
                link: "http://www.wintellectnow.com/Videos/Watch/fundamentals-of-angularjs",
                publicationDate: new Date(2013, 7, 21)
            },
            {
                title: "Programming the Windows Runtime by Example",
                publisher: "Addison-Wesley",
                description: "This is the most complete, solutions-focused reference for programming modern Windows Store apps with Windows Runtime. Replete with rich code examples, case studies, downloadable projects, and proven solutions, it thoroughly illuminates key areas of the Windows Runtime API, from networking to sensors and beyond. Drawing on his pioneering Windows 8/Windows RT development experience, three-time Microsoft MVP Jeremy Likness tackles specific problems with expert solutions presented in recipe style. Likness focuses on Microsoft's two most popular tools for Windows Runtime development: the C# language and the XAML technology that drives Windows 8 user interfaces. \r\nWriting for intermediate-to-advanced Windows developers, he presents expert tips, development tricks, and specific solutions for a wide spectrum of apps: consumer, media, social networking, syndication, and more. Dedicated chapters focus on line of business apps, tapping into Likness's experience managing some of the first Windows 8 business apps ever to be released. You'll also learn how to: Write highly optimized Windows Store apps based on a detailed understanding of the underlying framework and architecture; Discovering best practices for building apps that connect with social networks, authenticate with Windows Live accounts, and cache data locally to work offline; Understanding advanced features of the Windows Runtime covered in no other book.",
                link: "http://bit.ly/winrtexample",
                publicationDate: new Date(2014, 6, 6)
            },
            {
                title: "Building Windows 8 Apps with C# and XAML",
                publisher: "Addison-Wesley",
                description: "Build immersive, responsive touch apps for Windows 8 tablets, computers, and other devices! Top Microsoft MVP and Wintellect consultant Jeremy Likness shows how to leverage your existing C#, XAML, WPF, or Silverlight skills with new Visual Studio 12 tools and best practices to build incredibly powerful Windows 8/WinRT apps! Likness covers everything from line-of-business to consumer apps, showing exactly how Windows 8/WinRT builds upon and contrasts with earlier WPF/Silverlight development. Using outstanding code examples, he shows how to make the most of new platform features including integrated social networking and search, contracts, charms, and tiles. Building Windows 8 Apps with C# and XAML covers the entire application lifecycle, from planning and MVVM-based design through coding, testing, and beyond. Throughout, Likness addresses crucial development challenges that have only been discussed on MSDN, blog posts, and Twitter feeds -- and never with this depth and clarity before. His comprehensive insights and best practices will help readers join the 'first wave' of Windows 8 developers -- and gain a powerful competitive advantage in Windows development for every new device and form factor. Bonus projects are available for download online. For all experienced and aspiring Microsoft developers and architects, especially those who are at least somewhat familiar with Silverlight, WPF, C#, XAML, and/or related .NET technologies.",
                link: "http://www.amazon.com/gp/product/0321822161/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0321822161&linkCode=as2&tag=cei0e-20",
                publicationDate: new Date(2012, 11, 4)
            }
        ]);
})(angular.module("myApp"));