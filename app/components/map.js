import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

/**
 * Main Map Component. Uses MAPBOX APIs.
 * @extends Component
 * @param {number} lat - The latitude to be shown on the map
 * @param {number} long - The longitude to be shown on the map
 * @param {string} width - The width of the map
 * @param {string} height - The height of the map
 * @example
 * ```
 *     / <Map
 *     /   @lat={{@rental.location.lat}}
 *     /   @lng={{@rental.location.lng}}
 *     /   @width="150"
 *     /   @height="150">
 *         alt="A map of {{@rental.title}}"
 *       />
 * ```
 */
class MapComponent extends Component {
  // methods with get before them, are called getter methods. They return a value and this value is converted into a class variable. Unlike class variables, getters cannot be "assigned" a new value directly, so it does not make sense for Ember to monitor them for changes. So, we can't add a @tracked before a getter method
  /**
   * Get the token for MapBox.
   * @return {string} the URL encoded mapbox api string
   */
  get token() {
    return encodeURIComponent(ENV.MAPBOX_API);
  }
}

export default MapComponent;
