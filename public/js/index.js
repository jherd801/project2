$(document).ready(() => {
  // jQuery references to grab form data
  const usernameInput = $("#username");
  const emailInput = $("#email");
  const userForm = $("#user-form");

  // Submit button event listener
  $(userForm).on("submit", event => {
    event.preventDefault();
    if (!usernameInput.val().trim() || !emailInput.val().trim()) {
      return;
    }
    const newUser = {
      username: usernameInput.val().trim(),
      email: emailInput.val().trim()
    };
    console.log(newUser);
  });
});
