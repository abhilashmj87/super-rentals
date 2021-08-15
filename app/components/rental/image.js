import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  // @tracked provides 2-way binding in ember.
  @tracked isLarge = false;

  // Any method that needs to be called from the template needs to have and @action attached to it.
  @action toggleImageSize() {
    this.isLarge = !this.isLarge;
  }
}
