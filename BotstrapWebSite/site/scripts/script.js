const searchForm = document.querySelector('.d-flex');
const buttonSearch = searchForm.querySelector('.btn');
const searchInput = searchForm.querySelector('.form-control');

function showSearchInput() {
  if (searchInput.style.visibility == 'visible') {
    searchInput.style.visibility = 'hidden';
  }
  else {
    searchInput.style.visibility = 'visible';
  }


}

buttonSearch.addEventListener('click', showSearchInput);


$('.carousel').carousel({
  interval: false,
});
