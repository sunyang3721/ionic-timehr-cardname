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
})
.controller('formCtrl', function ($scope) {
	$scope.submitForm = function (userDetails) {
		//ng-model中的属性 获取  不是从name获取
		$scope.message = userDetails.name 
		+ userDetails.ihone 
		+ userDetails.qq 
		+ userDetails.userEmail 
		+ userDetails.wangzhi;
	}
	/* 错误提示文字  学习用
	$scope.getError = function (error) {
		if(angular.isDefined(error)) {
			if(error.required) {
				return "必须填写!";
			} else if (error.email) {
				return "请填写有效的邮箱!";
			} else if (error.number) {
				return "请填写数字格式";
			} else if (error.url) {
				return "请输入有效网址";
			}
		}
	}
	*/
	
});
