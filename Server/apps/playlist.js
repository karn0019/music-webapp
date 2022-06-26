import express from "express";
import { Router } from "express";
import { ObjectId } from "mongodb";
import { getPlaylist } from "../controller/playlistController.js";
import { client } from "../utils/db.js";

const playListRouter = Router();

playListRouter.get("/",getPlaylist);

// playListRouter.put("/", async (req, res) => {
//   const db = client.db("practice-mongo").collection("music");
//   try {
//     await db.updateOne(
//       { _id: ObjectId("62b6fd1b395fb2360e226d43") },
//       {
//         $push: {
//           Song: {
//             title: "Numb",
//             Cover:
//               "https://res.cloudinary.com/dqaoqxbjq/image/upload/v1651264992/samples/ecommerce/car-interior-design.jpg",
//             Link: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
//           },
//         },
//       }
//     );
//     return res.json({ message: "update success" });
//   } catch (error) {
//     console.log(error);
//     return res.json({ message: "Update error" });
//   }
// });

// playListRouter.delete("/:id", async (req, res) => {

//   const playlistId = ObjectId(req.params.id);
//   const db = client.db("practice-mongo").collection("music");

//   try {
//     await db.updateOne(
//       { _id: playlistId },
//       {
//         $pull: {
//           song: {
//             $elemMatch:{title:"Numb"},
//           },
//         },
//       }
//     );

//     return res.json({ message: "delete success" });
//   } catch (err) {
//     console.log(err);
//     return res.json({ message: "Delete error" });
//   }
// });





export default playListRouter;
