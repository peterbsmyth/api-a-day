var jobs = require('../../server/controllers/jobs.server.controller');

module.exports = function(app) {

  app.route('/api/jobs')
     .get(jobs.getJobs)
     .post(jobs.postJobs);
     
};