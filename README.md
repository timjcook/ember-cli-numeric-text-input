# Ember-cli-numeric-text-input

This addon allows you to target a group of inputs and prevent non-numeric characters being added.

The aim is to allow other commands to be maintained.

Implementation for this addon based on [this StackOverflow answer](http://stackoverflow.com/questions/469357/html-text-input-allow-only-numeric-input).

## Installation

* `ember install ember-cli-numeric-input-text`

## Usage

- Import the mixin into an Ember class.
- Call the `applyNumericOnlyToInputs` function in your `didInsertElement` hook.
- Pass in a jQuery collection of inputs that you want to apply this function to.

_Example:_
```
import NumericTextInput from 'numeric-text-input';

export default Component.extend(NumericTextInput, {
  didInsertElement() {
    this.applyNumericOnlyToInputs(this.$('input[type=\'number\'], input[type=\'tel\']'));
  }
});
```
