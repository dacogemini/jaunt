
/* var accessToken = 'BQB565o4S6aKgNZYh9DzBZU3bQdHXucwhyXnSb-S_RUVUwDx1wKC7u3-HeBYbFhQ0sYw1kX193_Rwo8x-Z5beAy5Q5B8XayZH6vGSdLSBjiIKpGKS7Hmyxu-tDivPQumi3sCPiwifksJ5y4JUSIr6HF6KosMc3_2lC9e'; */


    // Event listener for our cat-button
    $('#add-category').on('click', function() {

      var category = $('#category').val().trim();
      console.log(category);
      $('.loader').toggleClass('show');

      // Storing our giphy API URL for a random cat image
      var queryURL = 'https://api.spotify.com/v1/browse/categories/' + category + '/playlists';
      console.log(queryURL);

      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
		headers: {
		     'Authorization': 'Bearer ' + accessToken
		 },
		method: 'GET',
      }).then(function(response) {

      	var playlistIds = [response.playlists.items[0].id, response.playlists.items[1].id, response.playlists.items[2].id, response.playlists.items[3].id, response.playlists.items[4].id];
      	console.log(playlistIds);
		
		function getRandomPlaylist() {
	     var randoNum = Math.floor(Math.random() * playlistIds.length);
	     return playlistIds[randoNum];
	     console.log(randoNum);

       }

        var randomPlaylist = [];
      	for (let i = 0; i < 1; i++) {
		  randomPlaylist.push(getRandomPlaylist(playlistIds));
		  console.log(randomPlaylist);
		}

		var baseUrl = 'https://open.spotify.com/embed?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A' + randomPlaylist + '&theme=white';
        // While the playlist is building the loader icon will show.
		$('.loader').toggleClass('show');

		$('.playlist').html(`<iframe src="${baseUrl}" width="300" height="350" frameborder="0" allowtransparency="true"></iframe>`);


  })

  });

