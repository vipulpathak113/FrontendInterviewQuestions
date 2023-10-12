var current_url = "";

let backward_slack = [];
let forward_slack = [];

function visit_url(url) {
  if (current_url !== "") {
    backward_slack.push(current_url);
  }

  current_url = url;
}

function forward() {
  if (
    forward_slack.length == 0 ||
    current_url === forward_slack[forward_slack.length - 1]
  ) {
    console.log("Not  found");
    return;
  } else {
    backward_slack.push(current_url);
    current_url = forward_slack[forward_slack.length - 1];
    forward_slack.pop();
  }
}

function backward() {
  if (
    backward_slack.length == 0 ||
    current_url === backward_slack[backward_slack.length - 1]
  ) {
    console.log("Not  found");
    return;
  } else {
    forward_slack.push(current_url);
    current_url = backward_slack[backward_slack.length - 1];
    backward_slack.pop();
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
