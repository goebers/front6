'use strict';
// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array:
/*
 <li>
 <figure>
 <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
 <figcaption>
 <h3>Title</h3>
 </figcaption>
 </figure>
 </li>
 */
// After the loop print the HTML into <ul> element using innerHTML.

const showImages = () => {
  const ul = document.querySelector('ul');

  fetch('images.json').then((response) => {
    return response.json();
  }).then((json) => {
    let html = '';
    json.forEach((image) => {
      html +=
          `<li>
          <figure>
            <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
            <figcaption>
                <h3>${image.mediaTitle}</h3>
            </figcaption>
          </figure>
        </li>`;
    });
    ul.innerHTML = html;
    preventA();
  });
};

function preventA() {
  const link = document.querySelectorAll('a');

  console.log(link);

  link.forEach(function(evt) {
    evt.addEventListener('click', function(i) {
      i.preventDefault();
    });
  });
}

function modalShow() {

  const main = document.querySelector('main');

  main.addEventListener('click', function(evt) {

    let clickedElem = event.target;

    const modalDiv = document.querySelector('#modal');
    const modalImg = document.querySelector('#modalImg');

    if (clickedElem.getAttribute('src') != null) {
      modalImg.setAttribute('src', clickedElem.parentNode.getAttribute('href'));
      modalDiv.classList.remove('hidden');
      modalDiv.classList.add('lightbox');
      modalDiv.classList.add('animated');
      modalDiv.classList.add('zoomIn');
    }
  });
}

function modalHide() {
  const closeBtn = document.querySelector('.closeBtn');
  const modalDiv = document.querySelector('#modal');

  closeBtn.addEventListener('click',function() {
    modalDiv.classList.add('hidden');
    modalDiv.classList.remove('animated');
    modalDiv.classList.remove('zoomIn');
  })
}

showImages();
modalShow();
modalHide();
