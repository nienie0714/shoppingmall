/**
 * 
 */
'use strict';
angular.module('app')
.controller('agent', ['$scope', 'current', 'agentModel', function($scope, current, agentModel) {
	current();
	var servers = [], _sId;
	var scope = {
		build: {
			name: 'Building'
		},
		idle: {
			name: 'Idle'
		},
		count: {
			name: 'ALL'
		},
		physical: {
			name: 'PHYSICAL'
		},
		virtual: {
			name: 'VIRTUAL'
		},
		selects: ['All', 'Physical', 'Virtual'],
		renderData: [],
		delete: function(sId, index) {
			$scope.renderData = $scope.renderData.map(function(item, i) {
				if (item.sId === sId) {
					item.browser.splice(index, 1);
				}
				return item;
			});
		},
		select: function(item, event) {
			console.log(event);
			var $target = $(event.target);
			$target.addClass('active').siblings().removeClass('active');
			switch (item) {
				case 'Physical': 
					$scope.renderData = $scope.physical.servers;
					break;
				case 'Virtual': 
					$scope.renderData = $scope.virtual.servers;
					break;
				default:
					$scope.renderData = $scope.servers;
					break;
			}
		},
		showModal: function(sId) {
			_sId = sId;
		},
		saveBrowers: function() {
			var newBrowers = $scope.newBrowers.split(',');
			$scope.renderData = $scope.renderData.map(function(item, i) {
				if (item.sId === _sId) {
					item.browser = item.browser.concat(newBrowers);
				}
				return item;
			});
			$('#myModal').modal('hide');
			$scope.newBrowers = '';
		}
	};

	$scope = angular.extend($scope, scope);
	/**
	 *  type : 0  phhysical   1 virtual
	 *  status: 0 idle  1 building
	 * 
	 */
	var getData = {
		getPhysical: function(data) {
			var physical = data.filter(function(item, i) {
				if (item.type === 1) {
					return item;
				}
			});
			return physical;
		},
		getVirtual: function(data) {
			var idle = data.filter(function(item, i) {
				if (item.type === 0) {
					return item;
				}
			});
			return idle;
		},
		getBuild: function(data) {
			var build = data.filter(function(item, i) {
				if (item.status === 1) {
					return item;
				}
			});
			return build;
		},
		getIdle: function(data) {
			var idle = data.filter(function(item, i) {
				if (item.status === 0) {
					return item;
				}
			});
			return idle;
		}
	};
	agentModel.getserver().then(function(res) {
		if (res.status === 200) {
			var data = servers = res.data.server;
			$scope.renderData = data;
			$scope.servers = data;
			$scope.physical.servers = getData.getPhysical(data);
			$scope.virtual.servers = getData.getVirtual(data);
			$scope.build.servers = getData.getBuild(data);
			$scope.idle.servers = getData.getIdle(data);

			$scope.count.number = data.length;
			$scope.physical.number = $scope.physical.servers.length;
			$scope.virtual.number = $scope.virtual.servers.length;

			$scope.build.number = $scope.build.servers.length;
			$scope.idle.number = $scope.idle.servers.length;

		} else {
			alert('Request Fail!');
		}
	});
}]);

