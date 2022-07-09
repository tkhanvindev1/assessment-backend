const express = require("express");
const cors = require("cors");



const app = express();

app.use(cors());

app.use(express.json());

//end point function fire
const { getCompliment, getWisdome, addNewUser,getUserScore, userUpdated, deleteUser } = require('./controller')


//endpoits
app.get("/api/compliment", getCompliment);
app.get("/api/wisdom", getWisdome);
app.post("/api/users", addNewUser)
app.get("/api/users", getUserScore)
app.put("/api/users/:username", userUpdated)
app.delete('/api/users/users/username', deleteUser)

app.listen(4000, () => console.log("Server running on 4000"));
