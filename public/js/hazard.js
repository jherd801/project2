$(document).ready(() => {
  // jQuery references to grab form data
  const titleInput = $("#title");
  const categorySelected = $("#category");
  const severityInput = $("#severity");
  const latitudeInput = $("#latitude");
  const longitudeInput = $("#longitude");
  const descriptionInput = $("#description");
  const actionInput = $("#action");
  const hazardForm = $("#hazard-form");

  // Submit button event listener
  $(hazardForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    if (!titleInput.val().trim() || !categorySelected.val()) {
      return;
    }
    const newHazard = {
      title: titleInput.val().trim(),
      category: categorySelected.val(),
      severity: severityInput.val(),
      latitude: latitudeInput.val().trim(),
      longitude: longitudeInput.val().trim(),
      description: descriptionInput.val().trim(),
      action: actionInput.val().trim()
    };
    console.log(newHazard);
  });
});
