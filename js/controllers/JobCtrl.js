angular.module('timehr.JobCtrl', ['timehr.homeServer'])
.controller('timehrCtrl', function($scope,$stateParams,jobFactory) {
	var pid = $stateParams.pid;
	//console.log(pid);
	jobFactory.joblistFactory(pid);
	jobFactory.job_idFactory(pid);
	jobFactory.user_imgFactory(pid);
})
.controller('joblistCtrl',function($scope,$stateParams,jobFactory) {
  //console.log($location);
  var id = $stateParams.id;
  //console.log(id);
  jobFactory.job_showFactory(id);
});
