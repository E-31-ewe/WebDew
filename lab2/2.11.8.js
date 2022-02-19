let name = prompt("Who's there?", '');

if (name === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (name === '' || name === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}