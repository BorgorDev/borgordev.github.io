var defaultThreads = [
    {
        id: 1,
        title: "New Video! ME VS SONIC!",
        author: "Guest",
        date: Date.now(),
        content: "Sup! I made a new video! Go check it out here: https://www.youtube.com/shorts/Xz33a1Scy6Q",
        comments: [
            
        ]
    },
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
