import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Itube";
  res.locals.routes = routes;
  next();
};