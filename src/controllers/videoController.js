const videos = [
  {
    title: "First Video",
    rating: 4.5,
    comment: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 4.5,
    comment: 2,
    createdAt: "2 minutes ago",
    views: 50,
    id: 2
  },
  {
    title: "Third Video",
    rating: 4.5,
    comment: 2,
    createdAt: "2 minutes ago",
    views: 50,
    id: 3
  },
];

export const trending = (req, res) => {  
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  console.log("Show Video ", id);
  res.render("watch", { pageTitle: `Watching: ${video.title}`,  video});
}

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];

  res.render("edit", { pageTitle: `Editing: ${video.title}`, video});
}

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  
  videos[id - 1].title = title; 

  return res.redirect(`/videos/${id}`);
}

export const logout = (req, res) => res.send("Log Out");