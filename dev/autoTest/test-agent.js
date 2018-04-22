'use strict';
describe('app', function () {
    beforeEach(module('app'));
    describe('agentTest', function () {
        it('ctroller-agent', inject(function ($controller) {
            var $scope = {};
            //spec body
            var agentCtrl = $controller('agent', {$scope: $scope});
            expect(agentCtrl).toBeDefined();
            expect($scope.build.name).toEqual('Building');
            expect(true).toEqual(true);
        }));

    });
});