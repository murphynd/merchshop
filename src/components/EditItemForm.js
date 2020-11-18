import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditItemForm(props) {
  const { item } = props;
  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({ name: event.target.name.value, quantity: event.target.quantity.value, description: event.target.description.value })
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditItemFormSubmission}
        buttonText="Edit Item" />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  onEditCreation: PropTypes.func
};

export default EditItemForm;