const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Mission impossible",
  rocket: "k9 special",
  launchDate: new Date("July 7, 2017"),
  upcoming: true,
  success: true,
  customers: ["Banky", "Ejiro"],
};

const launch2 = {
  flightNumber: 101,
  mission: "Mission impossible2",
  rocket: "k9 special",
  launchDate: new Date("September 25, 2024"),
  upcoming: true,
  success: true,
  customers: [],
};
const launch3 = {
  flightNumber: 102,
  mission: "Mission impossible3",
  rocket: "k9 special",
  launchDate: new Date("September 25, 2024"),
  upcoming: false,
  success: true,
  customers: [],
};

launches.set(launch.flightNumber, launch);
launches.set(launch2.flightNumber, launch2);
launches.set(launch3.flightNumber, launch3);

let newFlightNumber = 103;
function existsLaunchWithId(launchID) {
  return launches.has(launchID);
}

function getAllLaunches() {
  return Array.from(launches.values());
}
function AddNewLaunches(launch) {
  newFlightNumber++;
  const newLaunch = {
    ...launch,
    success: true,
    upcoming: true,
    customers: ["Banky", "Zero to Mastery", "NASA"],
    flightNumber: newFlightNumber,
  };
  console.log("newLaunch", newLaunch);
  launches.set(newFlightNumber, newLaunch);
  return newLaunch;
}

function AbortLaunchById(launchID) {
  let aborted = launches.get(launchID);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  AddNewLaunches,
  AbortLaunchById,
};
