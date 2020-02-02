import * as get_VersionJs from "./get_Version.js";

exports.get_about = function controller_get_about(req, res, next) {
  res.render("about.ejs", {
    title: "Battle Recorder " + get_VersionJs.get_Version(3, 4)
  });
};