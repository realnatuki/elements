const d = '<div>Hello Appended</div>';
$('h1')
  .css({
    background: 'orange',
    color: 'black',
  })
  .append(`Appended this div with: ${d}`);
