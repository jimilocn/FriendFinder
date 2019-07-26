var friendData = require("../data/friends.js");
module.exports = function(app){
    app.get("/api/friend", function(request, response){
        response.json(friendData);

    });
    app.post("/api/friend", function(request, response){
        console.log("post survey back", request.body)
       // friendData.length = 0;
        //response.json({ok:true});
        var newFriend = request.body;
        var difference = 0;
        var result = 0;
        var newArrayWithTotalDifference = [];
        
        for(var i = 0; i < friendData.length; i++){
            // difference = 0;
            for(var j = 0; j < newFriend.scores.length; j++){
                result = Math.abs(parseFloat(friendData[i].scores[j]) - parseFloat(newFriend.scores[j]))
                // console.log("This is the result: " + result);
               difference += Math.abs(result)
            //    console.log("this is the difference: "  +difference);
            }
            newArrayWithTotalDifference.push({
                friendData: friendData[i].name,
                totalDifference: difference,
                photo: friendData[i].photo,
                instagram: friendData[i].instagram
            })
        }
        friendData.push(newFriend);
        newArrayWithTotalDifference.sort(function(a, b){
            return a.totalDifference - b.totalDifference
        })
        console.log(newArrayWithTotalDifference)
        response.json(newArrayWithTotalDifference[0]);
    });


    app.get("/api/friend", function (request,response){
        response.json(newArrayWithTotalDifference[0])
    });
};


