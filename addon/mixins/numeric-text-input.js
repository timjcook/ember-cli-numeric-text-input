import Ember from 'ember';

const { Mixin, run, $ } = Ember;

export default Mixin.create({

  applyNumericOnlyToInputs($inputs) {
    run.scheduleOnce('afterRender', this, function() {
      this._applyNumericOnlyToInputs($inputs);
    });
  },

  _applyNumericOnlyToInputs($inputs) {
    let applyNumericOnlyToInput = this._applyNumericOnlyToInput;

    $inputs.each(function() {
      applyNumericOnlyToInput($(this));
    });
  },

  _applyNumericOnlyToInput($input) {
    $input.keydown(function(e) {
      // Allow: backspace, delete, tab, escape, enter and .
      if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
         // Allow: Ctrl+A
        (e.keyCode === 65 && e.ctrlKey === true) ||
         // Allow: Ctrl+C
        (e.keyCode === 67 && e.ctrlKey === true) ||
         // Allow: Ctrl+X
        (e.keyCode === 88 && e.ctrlKey === true) ||
         // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
      }

      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    });
  }

});
