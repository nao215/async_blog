import hypernova from 'hypernova/server';
import Main from './app/assets/javascripts/components/Main';

hypernova({
  devMode: true,

  getComponent(name) {
    if (name === 'Main') {
      return Main;
    }
    return null;
  },

  port: 3030,
});
