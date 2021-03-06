import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb+srv://doodleMongoUser:fnKvqQ0hp09sL8v4@userdatacluster.x4iky.mongodb.net/zensarHiring?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('zensarHiring');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;