// lightbox

lightbox.option({
  resizeDuration: 800,
  fitImagesInViewport: true,
  maxWidth: 792,
  maxHeight: 497,
  wrapAround: true,
  alwaysShowNavOnTouchDevices: true
});


// hide and seek

// $(document).ready(function() {
//   $('#search').hideseek({
//     attribute: 'data-title',
//     nodata: 'No results found.'
//   });
// });


// own JavaScript or jQuery code

$('.searchbar').on('keyup', function() {
  const searchValue = $('.searchbar').val().toLowerCase();
  const AnchorTags = $('.gallery-container a');
  const imgs = $('.gallery-container a img')

  for (var i=0; i < AnchorTags.length; i++) {

    const imgAlt = AnchorTags[i].getAttribute('data-title').toLowerCase();
    const match = imgAlt.includes(searchValue);

    if (match) {
      AnchorTags[i].style.display = "";
    }
    else {
      AnchorTags[i].style.display = "none";
    }
  }
})
