import Ember from 'ember';

export default Ember.Component.extend({
  answerQuestion: false,
  actions: {
    answerQuestion() {
      this.set('answerQuestion', true);
    },

    addAnswer() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
      };
      var newAnswer = new Answer(params);
      this.set('answerQuestion', false);
      this.sendAction('addAnswer', newAnswer);
    }
  }
});
