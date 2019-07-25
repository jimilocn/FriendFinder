var friendsArray = require("../data/friends");



module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    app.post("/friend", function (req, res) {
        console.log("hi");
    })

    app.post("/friend", function (req, res) {

        var userInputMessageBodyObject = req.body;

        ​
        //store the total difference
        var totalDifference = 0;​
        //store the result for each substraction from the scores
        var result = 0;​
        //make a new array to store another array of obects with
        //total difference in the scores
        var newTablewithTotalDifference = []

        ​
        //outer for loop to iterate the entire array of object from table
        for (var i = 0; i < currentTable.length; i++) {
            ​
            //reset the total difference for the next object person
            totalDifference = 0;​
            //inner for loop to calculate the new Person from the user Input off req.body
            for (var j = 0; j < userInputMessageBodyObject.scores.length; j++) {
                ​
                //subtract each object score from first element to the last element of the array
                result = parseFloat(currentTable[i].scores[j]) - parseFloat(userInputMessageBodyObject.scores[j])

                //sum up the subtraction and stores in totatdifference
                //and change the values to be positive
                totalDifference += Math.abs(result)
            }

            //inserts into a new array of object for sorting the least total difference
            newTablewithTotalDifference.push({
                currentTable: currentTable[i].name,
                totalDifference: totalDifference,
                photo: currentTable[i].photo
            })
        }​
        //add a new person to our table from 
        //userInput that is stored in req.body
        currentTable.push(userInputMessageBodyObject);

        //sorts the new array of object against the total difference
        newTablewithTotalDifference.sort(function (a, b) {
            return a.totalDifference - b.totalDifference
        })​
        console.log(newTablewithTotalDifference)

        //returns first element and response back the total least difference to the           //client during the post request 
        res.json(newTablewithTotalDifference[0]);
    })






    //   app.post("/api/tables", function(req, res) {

    //     if (tableData.length < 5) {
    //       tableData.push(req.body);
    //       res.json(true);
    //     }
    //     else {
    //       waitListData.push(req.body);
    //       res.json(false);
    //     }
    //   });

    //   app.post("/api/clear", function(req, res) {

    //     tableData.length = 0;
    //     waitListData.length = 0;

    //     res.json({ ok: true });
    //   });
};