import Ember from 'ember';
import NumericTextInputMixin from 'ember-cli-numeric-text-input/mixins/numeric-text-input';
import { module, test } from 'qunit';

const { Object: EmberObject } = Ember;

module('Unit | Mixin | numeric text input');

test('it applies prevent non numeric to a list of inputs', function(assert) {
  assert.expect(3);

  let NumericTextInputObject = EmberObject.extend(NumericTextInputMixin);
  let subject = NumericTextInputObject.create();

  let inputs = $('<div id="1"></div><div id="2"></div><div id="3"></div>');

  subject._applyNumericOnlyToInput = function(input) {
    assert.ok([1,2,3].indexOf(parseInt(input.attr('id'))) !== -1);
  };

  subject._applyNumericOnlyToInputs(inputs);
});

test('it applies prevent non numeric to an input', function(assert) {
  assert.expect(1);

  let NumericTextInputObject = EmberObject.extend(NumericTextInputMixin);
  let subject = NumericTextInputObject.create();

  let input = $('<div id="1">');
  input.keydown = function() {
    assert.ok(true);
  };

  subject._applyNumericOnlyToInput(input);
});
