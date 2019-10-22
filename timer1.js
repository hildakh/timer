var args = process.argv.slice(2);

const timer = function(duration) {
  if(duration <= 0 || isNaN(duration)) {
    return;
  }
  setTimeout(() => {
    console.log('It\'s time!');
  }, duration);
}

timer(args);