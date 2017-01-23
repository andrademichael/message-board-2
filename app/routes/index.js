import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('quesiton', params);
      newQuestion.save();
      this.transitionTo('index')
    }

    addAnswer(question, answer) {
      var currentAnswers = question.answers;
      newAnswers = currentAnswers.push(answer);
      question.set("answers", newAnswers);
      question.save();
      this.transitionTo('questionView');
    }
  }
});
