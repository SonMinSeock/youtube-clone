export const trending = (req, res) => res.send("Home page Videos");

export const see = (req, res) => {
  console.log(req.params);
  res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  console.log(req.params);
  res.send("Edit");
};

export const search = (req, res) => res.send("Search");

export const logout = (req, res) => res.send("Log Out");

export const deleteVideo = (req, res) => {
  console.log(req.params);
  res.send("Delete Video");
};

export const upload = (req, res) => res.send("Upload Video");