function toCase(text) {
  // write your code here
	return `${text.toLowercase()}-${text.toUpperCase()}`;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
