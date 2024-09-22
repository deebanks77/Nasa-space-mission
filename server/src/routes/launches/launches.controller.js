const {
  getAllLaunches,
  AddNewLaunches,
  AbortLaunchById,
  existsLaunchWithId,
} = require("../../models/launches.model");
function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}
function httpAddNewLaunch(req, res) {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.launchDate ||
    !launch.rocket ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
      status: 400,
    });
  }

  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    res.status(400).json({
      error: "Invalid launch date",
      status: 400,
    });
  }
  return res.status(201).json(AddNewLaunches(launch));
}
function httpAbortLaunchById(req, res) {
  const launchID = Number(req.params.id);
  const existsLaunch = existsLaunchWithId(launchID);

  console.log("launchID", launchID);
  console.log("existsLaunch", existsLaunch);

  if (!existsLaunch) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }
  const aborted = AbortLaunchById(launchID);
  console.log("aborted", aborted);
  return res.status(201).json(aborted);
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunchById };
