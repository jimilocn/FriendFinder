

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, options);
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
    $('select').formSelect();
});

// Or with jQuery

$("#submit").on("click", function (event) {
    event.preventDefault();
​
    var newTable = {
        name: $("#name").val().trim(),
        scores:[1,1,1,1,1,1,1,1,1,1],
        photo:"https://www.liveabout.com/thmb/lDtQYBZTlzReTjDJyJVT1yav3e0=/2550x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/simp_Mr_Burns-3_hires1-56d695815f9b582ad501c2a5.jpg"
    }
    $.post("/reserve", newTable)
    .then(function(serverData){
​
        console.log(serverData)
         alert("added")
        
    })
​
})
