module.exports = {
    dashboard: (req, res) => {
        res.render("admin/page/dashboard", {title: "dashboard"});
    },
}