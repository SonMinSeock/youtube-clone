export const localMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Webtube";
  res.locals.loggedInUser = req.session.user || {};
  console.log(res.locals.loggedInUser);
  next();
};
