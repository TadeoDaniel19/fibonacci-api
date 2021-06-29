const fibonacciSerie = require("../utils/index.js");
const isNumber = require("../helpers/isNumber");

const appRouter = (app) => {
  app.get("/fibonacci/:number", (req, res) => {
    const numberParam = req.params.number;
    if (!numberParam) {
      res.status(400);
      return res.send({
        status: "Bad request",
        message: "The param number is required.",
      });
    } else if (!isNumber(numberParam)) {
      res.status(400);
      return res.send({
        status: "Bad request",
        message: "The param must be a number.",
      });
    } else {
      const body = fibonacciSerie(numberParam);
      res.status(200);
      return res.send({
        status: "Ok",
        message: "The fibonacci resource has been obtained successfully.",
        data: body,
      });
    }
  });
}


module.exports = appRouter;