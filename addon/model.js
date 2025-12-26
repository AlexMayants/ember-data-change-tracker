import Model from 'ember-data/model';
import changeTracker from './mixins/change-tracker';

export default Model.extend(changeTracker);
