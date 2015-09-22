angular.module('timehr.JobCtrl', ['timehr.homeServer'])
.controller('timehrCtrl', function($rootScope,$stateParams,jobFactory) {
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
.controller('formCtrl', function ($scope,$http,$ionicPopup,$ionicLoading) {
	$scope.submitForm = function (userDetails) {
		//ng-model中的属性 获取  不是从name获取
		$pid = userDetails.pid;
		$name = userDetails.name;
		$ihone = userDetails.ihone;
		$qq = userDetails.qq;
		$userEmail = userDetails.userEmail;
		$wangzhi = userDetails.wangzhi;
		$jobname = userDetails.jobname;
		//console.log($name);
		$ionicLoading.show({
					template: "正在载入数据，请稍后...",
					duration:6000
				});
		$http({
			method:'post',
			url:'http://192.168.7.157/sunyang/test.php/Weixinajax/userPost',
			data:{pid:$pid,name:$name,ihone:$ihone,qq:$qq,userEmail:$userEmail,wangzhi:$wangzhi,jobname:$jobname}
		}).success(function (req) {
			console.log(req);
			$ionicLoading.hide();
			$scope.newUser = '';
			$ionicPopup.alert({
					title: "提交状态",
					template: req['info']
			}).then(function () {
				$scope.info = req['info'];
			}
			);
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

	/*后台写法

	*/
	
});
