const fibonacciSerie = require("../utils/index.js")

const appRouter = (app) => {
  app.get("/:number", (req, res) => {
    if (!req.params.number) {
      res.status(400);
      return res.send({
        status: "Bad request",
        message: "The param number is required."
      });
    }

    const body = fibonacciSerie(req.params.number);
    res.status(200);
    return res.send({
      status: "Ok",
      message: "The fibonacci resource has been obtained successfully.",
      result: body
    });
  });
}


module.exports = appRouter;