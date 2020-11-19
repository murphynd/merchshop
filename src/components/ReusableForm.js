import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="card">
        <form onSubmit={props.formSubmissionHandler}>
          <div className="form-group">
            <input
              type='text'
              name='name'
              placeholder='Item Name' />
          </div>
          <div class="form-group">
            <input
              type='number'
              name='quantity'
              defaultValue="0"
              min="0" />
          </div>
          <div class="form-group">
            <textarea
              name='description'
              placeholder='Description' />
          </div>
          <button type="button" className="btn btn-primary" type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>
  );
}
ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;