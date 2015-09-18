angular.module('timehr.JobCtrl', ['timehr.homeServer'])
.controller('timehrCtrl', function($stateParams,jobFactory) {
	var pid = $stateParams.pid;
	//console.log(pid);
	jobFactory.joblistFactory(pid);
	jobFactory.job_idFactory(pid);
	jobFactory.user_imgFactory(pid);
})
.controller('joblistCtrl', function($stateParams,jobFactory) {
  //console.log($location);

  //console.log($stateParams.id);
  jobFactory.job_showFactory($stateParams.id);
});
