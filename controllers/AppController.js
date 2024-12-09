import RedisClient from '../utils/redis';
import DBClient from '../utils/db';

export default class AppController {
  static getStatus(req, res) {
    res.status(200).json({
      redis: RedisClient.isAlive(),
      db: DBClient.isAlive(),
    });
  }

  static getStats(req, res) {
    Promise.all([DBClient.nbUsers(), DBClient.nbFiles()])
      .then(([usersCount, filesCount]) => {
        res.status(200).json({ users: usersCount, files: filesCount });
      });
  }
}
