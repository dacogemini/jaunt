var accessToken = 'BQDUa9AFM4NQ9EQS24pUjXIV_rrIZ6g6cj5ZNONgdlR1lgqntZCIMfedIh_Cokn88lrLzXvOgrd_9b3uTqZuqeEDYFel3cijkzUf66jIqs5GYho39tTOZ9YUdcw7ZyaESK2CvresmA0ZQcczZfH7a8sLd7Rgq_a8JapJVmunS55-u1GDUifFJc9D8HiRVQFyRL6D-t1jugyChXPKDBZrEsPrE3E045xrsdPKxgNPyGoahItZJCB6YvIA';


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

		$('.playlist').html(`<iframe src="${baseUrl}" width="250" height="350" frameborder="0" allowtransparency="true"></iframe>`);


  })

  });