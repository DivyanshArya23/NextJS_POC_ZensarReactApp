import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  let doc;
  if (req?.headers?.getsingleuser) {
    const id = req?.headers?.id;
    doc = await req.db.collection("userData").findOne({ id: id });
  } else {
    doc = await req.db.collection("userData").find().toArray();
  }
  res.json(doc);
});

handler.delete(async (req, res) => {
  const id = JSON.parse(req.body).id;
  let doc = await req.db.collection("userData").deleteOne({ id: id });
  res.json({ message: "ok" });
});

handler.post(async (req, res) => {
  const newUser = JSON.parse(req.body);
  let doc = await req.db.collection("userData").insert(newUser);
  res.json({ message: "ok" });
});

handler.put(async (req, res) => {
  const updatedUser = JSON.parse(req.body);
  console.log("putting", updatedUser);
  let doc = await req.db.collection("userData").replaceOne(
    { id: updatedUser.id },
    // {
    //   $set: {
    //     name: updatedUser.name,
    //     Image: updatedUser.Image,
    //     address: updatedUser.address || "",
    //   },
    // },
    updatedUser
  );
  res.json({ message: "ok" });
});

export default handler;
