import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import ChangeTracker from '@cityads/ember-data-change-tracker/mixins/change-tracker';

export default Model.extend(ChangeTracker, {
  name: attr('string'),
  owner: belongsTo('user', { async: false })
});