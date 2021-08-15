import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

export default class MapComponent extends Component {
  // methods with get before them, are called getter methods. They return a value and this value is converted into a class variable. Unlike class variables, getters cannot be "assigned" a new value directly, so it does not make sense for Ember to monitor them for changes. So, we can't add a @tracked before a getter method
  get token() {
    return encodeURIComponent(ENV.MAPBOX_API);
  }
}
