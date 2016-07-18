angular.module('app', [])

. controller('ShoppingCartCtrl', function ($scope)  {
    
        $scope.items = [
			{Name: "Soap", Price: "25", Quantity: "10"},
			{Name: "Shaving cream", Price: "50", Quantity: "15"},
			{Name: "Shampoo", Price: "100", Quantity: "5"}
		];
			
		$scope.mySortFunction = function(item) {
			if(isNaN(item[$scope.sortExpression]))
				return item[$scope.sortExpression];
			return parseInt(item[$scope.sortExpression]);
		}
});


var json = '[{'+
	'"name": "Mr Robot. Where is my mind",'+
	'"url": "EMfNB3fakB8" '+
'}'+
','+ 
'{'+
	'"name": "Fightclub. Where is my mind",'+
	'"url": "QOvEFNVWj4M"'+
'}'+
','+ 
'{'+
	'"name": "David Bowie. Life on Mars",'+
	'"url": "-bOYg1sU9iI"'+
'}'+
']'

var arr = JSON.parse(json);
for (var i = 0; i < arr.length; i++){
  var obj = arr[i];
    document.write('<div><a class="fancybox fancybox.iframe" href=http://www.youtube.com/embed/'+obj.url+'?enablejsapi=1&wmode=opaque>'+obj.name+'</a></div>');
}

// Fires whenever a player has finished loading
function onPlayerReady(event) {
    event.target.playVideo();
}

// Fires when the player's state changes.
function onPlayerStateChange(event) {
    // Go to the next video after the current one is finished playing
    if (event.data === 0) {
        $.fancybox.next();
    }
}

// The API will call this function when the page has finished downloading the JavaScript for the player API
function onYouTubePlayerAPIReady() {
    
    // Initialise the fancyBox after the DOM is loaded
    $(document).ready(function() {
        $(".fancybox")
            .attr('rel', 'gallery')
            .fancybox({
                openEffect  : 'none',
                closeEffect : 'none',
                nextEffect  : 'none',
                prevEffect  : 'none',
                padding     : 0,
                margin      : 50,
                beforeShow  : function() {
                    // Find the iframe ID
                    var id = $.fancybox.inner.find('iframe').attr('id');
                    
                    // Create video player object and add event listeners
                    var player = new YT.Player(id, {
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }
            });
    });
    
}