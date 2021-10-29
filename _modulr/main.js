import './scss/main.scss';
import './js/alan';
// $('h1')
//   .css('background', 'blue')
//   .width('300px')
//   .on('mouseenter', (evt) => {
//     $(evt.currentTarget).animate(
//       {
//         width: '500px',
//       },
//       {
//         duration: 300,
//         specialEasing: {
//           width: 'linear',
//           height: 'easeOutBounce',
//         },
//         complete: () => {
//           $(evt.currentTarget).text('another text');
//         },
//       }
//     );
//   })
//   .on('mouseleave', (evt) => {
//     $(evt.currentTarget).animate({
//       width: '300px',
//     });
//   });
const h1 = $('h1');
const text = $('h1').text();
h1.on({
  mouseenter: (evt) => {
    $(evt.currentTarget).text('hello world');
  },
  mouseleave: (evt) => {
    $(evt.currentTarget).text(text);
  },
});
$('#datepicker').datepicker();
