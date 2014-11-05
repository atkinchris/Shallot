app.controller('PostCtrl', function($scope, Post) {
	$scope.posts = Post.all;

	$scope.post = {text: '...'};

	$scope.submitPost = function () {
		Post.create($scope.post).then(function () {
			$scope.post = {text: '...'};
		});
	};

	$scope.deletePost = function (post) {
		Post.delete(post);
	};
});
