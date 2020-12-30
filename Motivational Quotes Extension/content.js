let myInt = (Math.floor(Math.random() * 1643)) + 1;
console.log(myInt);

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    if (data[myInt].author === null){
    	var author = "- Anonymous";
    } else{
    	var author = "- "+data[myInt].author;
    }
    let quote = data[myInt].text;
    console.log(author, quote);
    document.getElementById("quote").innerHTML = quote;
  	document.getElementById("author").innerHTML = author;
  });
  

