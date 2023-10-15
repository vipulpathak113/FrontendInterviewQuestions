var current_url = "";

let backward_stack = [];
let forward_stack = [];

function visit_url(url) {
  if (current_url !== "") {
    backward_stack.push(current_url);
  }

  current_url = url;
}

function forward() {
  if (
    forward_stack.length === 0 ||
    current_url === forward_stack[forward_stack.length - 1]
  ) {
    console.log("Not  found");
    return;
  } else {
    backward_stack.push(current_url);
    current_url = forward_stack[forward_stack.length - 1];
    forward_stack.pop();
  }
}

function backward() {
  if (
    backward_stack.length === 0 ||
    current_url === backward_stack[backward_stack.length - 1]
  ) {
    console.log("Not  found");
    return;
  } else {
    forward_stack.push(current_url);
    current_url = backward_stack[backward_stack.length - 1];
    backward_stack.pop();
  }
}

function simulatorFunction() {
  // Current URL
  let url = "ajay.com";

  // Visit the current URL
  visit_url(url);

  // Print the current URL
  console.log("Current URL is: " + current_url);

  // New current URL
  url = "abc.com";

  // Visit the current URL
  visit_url(url);

  // Print the current URL
  console.log("Current URL is: " + current_url);

  // Pressed backward button
  backward();

  // Print the current URL
  console.log(
    "Current URL after pressing" + " Backward button is: " + current_url
  );

  // Pressed forward button
  forward();

  // Print the current URL
  console.log(
    "Current URL after pressing" + " Forward button is: " + current_url
  );

  // New current URL
  url = "nikhil.com";

  // Visit the current URL
  visit_url(url);

  // Print the current URL
  console.log("Current URL is: " + current_url + " </br>");

  // Pressed forward button
  forward();

  // Print the current URL
  console.log(
    "Current URL after pressing" + " Forward button is: " + current_url
  );
  // Pressed backward button
  backward();

  // Print the current URL
  console.log(
    "Current URL after pressing" + " Backward button is: " + current_url
  );
}

// Function to simulate process of
// pressing forward & backward button
simulatorFunction();
