$("searchBtn").on("click", function (event) {
    event.preventDefault();

    var question = $("search-term").val();

})


var apiKey = "Uz7yxjvAafqF73Jew9sNdtBGMc8MEE9z";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + question "&api-key=" + apiKey 



$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
        console.log(response);
    })

var headline = response.docs[0].headline.main;