import AppController from '../controllers/AppController'

const routs = (api) => {
api.get('/status', AppController.getStatus);
api.get('/stats', AppController.getStats);
}

export default routs;
