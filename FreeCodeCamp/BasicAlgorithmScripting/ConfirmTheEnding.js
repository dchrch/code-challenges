function end(str, target) {
  return str.substr(str.length - target.length, str.length - 1) === target;
}

end('Bastian', 'n');
