const express = require("express");
const router = express.Router();


//default Get
router.get("/", (req, res) => {
    return res.status(200).send({
        responseCode: "00",
        responseMessage: "You are connected Ecommerce app api",
        data: 'you are connected',
    });
});

//default Get
router.get("/getUser", (req, res) => {
    const { param1, param2 } = req.query;

    //get current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayName = daysOfWeek[currentDayOfWeek];
    //utc time
    const currentDate = new Date();

    const year = currentDate.getFullYear();         // Get the current year (e.g., 2023)
    const month = currentDate.getMonth() + 1;       // Get the current month (0-based index, so add 1)
    const day = currentDate.getDate();               // Get the day of the month (1-31)
    const hours = currentDate.getHours();            // Get the current hour (0-23)
    const minutes = currentDate.getMinutes();        // Get the current minute (0-59)
    const seconds = currentDate.getSeconds();        // Get the current second (0-59)
    const milliseconds = currentDate.getMilliseconds();  // Get the current millisecond (0-999)

    // Create a formatted date and time string
    const fullDateTime = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;


    const data = {
        slack_name: "Ademuyiwa Adekunle",
        "current_day": currentDayName,
        "utc_time": fullDateTime,
        "track": "backend",
        "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
        "github_repo_url": "https://github.com/username/repo",
        "status_code": 200
    }

    return res.status(200).send({
        responseCode: "00",
        responseMessage: "You are connected Ecommerce app api",
        data: {
            "slack_name": "example_name",
            "current_day": "Monday",
            "utc_time": "2023-08-21T15:04:05Z",
            "track": "backend",
            "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
            "github_repo_url": "https://github.com/username/repo",
            "status_code": 200
        }

    });
});


module.exports.taskRoutes = router;
