// Task02
// Using JavaScript and DOM hide hide second and third paragraphs 
// of target HTML document, all other elements should be visible

function m07task02() {
  document.getElementsByClassName('test')[0].style.visibility = 'hidden';
  document.getElementsByClassName('test')[1].style.visibility = 'hidden';
}