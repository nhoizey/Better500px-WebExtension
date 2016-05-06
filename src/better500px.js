(function(w, d) {
  if (d.querySelector('#profiles_show')) {

    /* *******************************************************************************************
     * Get current photographer informations
     * *******************************************************************************************/
    var photographerName = d.querySelector('.user_details h1').innerHTML.replace(/-/g, ' ').replace(/&amp;/g, '&');
    var photographerId = d.querySelector('[property="al:ios:url"]').content.replace(/^.*\/([0-9]+)$/g, '$1');
    var photographerHomeUrl = d.querySelector('[property="al:android:url"]').content;

    /* *******************************************************************************************
     * Add "pulse" link to a search on the photographer name, sorted by pulse
     * *******************************************************************************************/
    var photoLi = d.querySelector('.profile_nav.px_tabs li.photos');
    var pulseLi = '<li><a href="https://500px.com/search?q=' + encodeURIComponent(photographerName).replace(/%0A/g, '') + '&amp;type=photos&amp;sort=pulse">Pulse</a></li>';
    photoLi.insertAdjacentHTML('afterend', pulseLi);

    /* *******************************************************************************************
     * Add "favorites" link to a gallery named "favorites" and containing at least 1 photo
     * *******************************************************************************************/
    var favoritesAPI = 'https://api.500px.com/v1/users/' + photographerId + '/galleries/favorites?include_user=true&include_cover=1&cover_size=2048&consumer_key=2EECSqFxfl0oEBltvQ19hQ5oeYfyG4AjcZu8jceH';
    fetch(favoritesAPI)
      .then(function(response) {
        var contentType = response.headers.get("content-type");
        if(contentType && contentType.indexOf("application/json") !== -1) {
          return response.json().then(function(json) {
            var photosCount = json.gallery.items_count;
            if (photosCount > 0) {
              var galleriesLi = d.querySelector('.profile_nav.px_tabs li.galleries');
              var favoritesLi = '<li><a href="' + photographerHomeUrl + '/galleries/favorites">Favorites</a></li>';
              galleriesLi.insertAdjacentHTML('afterend', favoritesLi);
            }
          });
        }
      });
  }
}(window, document));
