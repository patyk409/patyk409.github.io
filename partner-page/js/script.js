/*
  JS METHOD
*/
// window.addEventListener('DOMContentLoaded', () => {
//   /*
//     VARIABLES
//   */
//   const summary_bar = document.querySelector('.summary_section')
//   const page_offset = 400
//   /*
//     SHOW / HIDE SUMMARY BAR
//   */
//   window.addEventListener('scroll', () => {
//     if (window.pageYOffset > page_offset) {
//       summary_bar.classList.add('visibility')
//     } else {
//       summary_bar.classList.remove('visibility')
//     }
//   })
// })

/*
  JQUERY METHOD
*/
$(document).ready(() => {
  /*
    VARIABLES
  */
  const page_offset = 400
  /*
    SHOW / HIDE SUMMARY BAR
  */
  $(window).scroll(() => {
    if ($(document).scrollTop() > page_offset) {
      $('.summary_section').addClass('visibility')
    } else {
      $('.summary_section').removeClass('visibility')
    }
  })
})
