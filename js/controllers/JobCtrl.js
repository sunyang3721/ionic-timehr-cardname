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
.controller('formCtrl', function ($scope,$http) {
	$scope.submitForm = function (userDetails) {
		//ng-model中的属性 获取  不是从name获取
		$name = userDetails.name;
		$ihone = userDetails.ihone;
		$qq = userDetails.qq;
		$userEmail = userDetails.userEmail;
		$wangzhi = userDetails.wangzhi;
		//console.log($name);
		$http({
			method:'post',
			url:'http://192.168.7.157/sunyang/test.php/Weixinajax/userPost',
			data:{name:$name,ihone:$ihone}
		}).success(function (req) {
			console.log(req);
		}).error(function () {
			//错误信息
		})
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
