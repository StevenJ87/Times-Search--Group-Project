$("#searchBtn").on("click", function (event) {
    event.preventDefault();

    var search = $("#search").val();
    var recordNum = $("#number").val();
    var startYear = $("#start").val();
    var endYear = $("#end").val();

    var apiKey = "Uz7yxjvAafqF73Jew9sNdtBGMc8MEE9z";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=" + apiKey + "&fq=" +

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
        })
})




// var headline = response.docs[0].headline.main;