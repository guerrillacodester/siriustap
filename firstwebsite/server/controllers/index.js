import * as get_VersionJs from "./get_Version.js";

exports.get_index = function controller_get_index(req, res, next) {
  res.render("index.ejs", {
    title: "Battle Recorder " + get_VersionJs.get_Version(3, 4)
  });
};
