import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit._id = new Date().getTime() + "";
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.retuits = 0;
  newTuit.replies = 1;
  newTuit.username = "NASA";
  newTuit.handle = "@NASA";
  newTuit.time = "1h";
  newTuit.title = "This is a title";
  newTuit.topic = "NASA";

  tuits.push(newTuit);
  res.json(newTuit);
};
const findTuits = (req, res) => {
  res.json(tuits);
};
const updateTuit = (req, res) => {
  const tuitId = req.params["tid"];
  const updates = req.body;
  tuits = tuits.map((tuit) =>
    tuit._id === tuitId ? { ...tuit, ...updates } : tuit
  );
  res.sendStatus(200);
};
const deleteTuit = (req, res) => {
  const tuitId = req.params["tid"];
  tuits = tuits.filter((tuit) => tuit._id !== tuitId);
  res.sendStatus(200);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
