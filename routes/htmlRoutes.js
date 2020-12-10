const path = require("path");

module.exports = function (app) {
    app.get("/exercises", function (req, res) {
        res.sendfile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/", function (req, res) {
        res.sendfile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/stats", function (req, res) {
        res.sendfile(path.join(__dirname, "../public/stats.html"));
    });
};