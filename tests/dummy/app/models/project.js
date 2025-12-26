import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {belongsTo, hasMany} from 'ember-data/relationships';
import ChangeTracker from '@cityads/ember-data-change-tracker/mixins/change-tracker';

export default Model.extend(ChangeTracker, {
  changeTracker: { trackHasMany: true, auto: false, enableIsDirty: true },
  title: attr('string'),
  blob: attr(),
  company: belongsTo('company', { async: true }),
  details: hasMany('detail'),
  
  init(){
    this._super(...arguments);
  }
});
