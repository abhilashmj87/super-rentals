import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class Indexroute extends Route {
  // This method is also known as the model hook. The model hook is responsible for fetching and preparing any data that you need for your route. Ember will automatically call this hook when entering a route, so that you can have an opportunity to run your own code to get the data you need. The object returned from this hook is known as the model for the route.
  async model() {
    // fetch is a browser level api: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    let response = await fetch('/api/rentals.json');
    let { data } = await response.json();

    return data.map((model) => {
      let { id, attributes } = model;
      let type;

      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      return { id, type, ...attributes };
    });
  }
}
