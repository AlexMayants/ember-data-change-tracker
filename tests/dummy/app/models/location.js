import attr from 'ember-data/attr';
import Fragment from 'ember-data-model-fragments/fragment';
import ChangeTracker from '@cityads/ember-data-change-tracker/mixins/change-tracker';

export default Fragment.extend(ChangeTracker, {
  place: attr('string'),
  number: attr('number')
});
