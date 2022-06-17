const searchForm = document.querySelector('.form-search');
const buttonSearch = searchForm.querySelector('.btn-search');
const searchInput = searchForm.querySelector('.form-search-input');

function showSearchInput() {
  if (searchInput.style.visibility == 'visible') {
    searchInput.style.visibility = 'hidden';
  }
  else {
    searchInput.style.visibility = 'visible';
  }


}

buttonSearch.addEventListener('click', showSearchInput);


// const btnSearch = document.querySelector('.btn-search');
//
// btnSearch.addEventListener('click', function() {
//   alert('hello');
// })

$('.carousel').carousel({
  interval: 1000
});


$('.carousel').carousel({
  interval: 1000
});
