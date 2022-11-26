export const handleHome = (req, res) => res.render("home", { pageTitle: "Home" });
export const handleWatch = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const handleEdit = (req, res) => {
    console.log(req.params);
    res.render("edit", { pageTitle: "Edit" });
}
export const deleteVideo = (req, res) => res.send("Delete Video");
export const upload = (req, res) => res.send("Upload Video");