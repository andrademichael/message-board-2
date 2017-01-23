import Ember from 'ember';

export default Ember.Component.extend({
  areAnswersShowing: false,
  actions: {
    answersToggle: function() {
      if (this.get('areAnswersShowing') === true) {
        this.set('areAnswersShowing', false);
      } else {
        this.set('areAnswersShowing', true);
      }
    }
  }
});
