var homeApp = angular.module('timehr.homeServer', []);

homeApp.constant("dataURL",'http://192.168.7.157/sunyang/test.php/Weixinajax');  //定义常量

homeApp.factory('jobFactory',function ($rootScope,$timeout,$ionicLoading,$ionicPopup,jobService) {
	return{
		joblistFactory:function(pid) {
			
			$ionicLoading.show({
					template: "正在载入数据，请稍后...",
					duration:2000
				});
		    jobService.joblist(pid).success(function (data,status,config) {
		   		$rootScope.datas = data; //输出数组
		   		
		    }).error(function() {
		   		$ionicLoading.hide();
		   		$ionicPopup.alert({
					title: "警告",
					template: "网络连接状态不太好,请重新连接"
				})
		   	})
		   	$ionicLoading.hide(); //消失载入loading示意图
		},
		job_idFactory:function(id) {

		    jobService.job_id(id).success(function (data,status,config) {
		   		//console.log(config);
		   		$rootScope.user = data; //输出数组
		    }).error(function() {
		   		$ionicLoading.hide();
		   		$ionicPopup.alert({
					title: "警告",
					template: "网络连接状态不太好,请重新连接"
				})
		   	});

		},
		user_imgFactory:function(pid) {
			jobService.user_img(pid).success(function (data,status,config) {
				$rootScope.user_img = data;
			}).error(function() {
				//错误代码
			})
		},
		job_showFactory:function(id) {
			jobService.job_show(id).success(function (data,status,config) {
				$rootScope.jobdata = data;
				$rootScope.newUser = {'pid':data['pid']};
				//console.log(data);
			}).error(function () {
				//错误代码
			})
		}
	}

})
.service('jobService',function ($http,$log,dataURL) {  //在参数中加入常量dataURL
	this.joblist = function (pid) {
		var URL = dataURL+'/home/pid/'+pid;  //常量执行
		return $http.get(URL,{cache:true});
	},
	this.job_id = function (pid) {
		var URL = dataURL+'/userId/id/'+pid;
		return $http.get(URL,{cache:true});
	}
	this.user_img = function(pid) {
		var URL = dataURL+'/user_img/id/'+pid;
		return $http.get(URL,{cache:true});
	}
	this.job_show = function (id) {
		var URL = dataURL+'/job_show/id/'+id;
		return $http.get(URL,{cache:true});
	}
});