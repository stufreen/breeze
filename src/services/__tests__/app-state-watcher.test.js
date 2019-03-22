import { handleStateChange } from '../app-state-watcher';

test('it fires a callback when state goes from background to active', (done) => {
  const myCallback = () => {
    done();
  };

  handleStateChange('background');
  handleStateChange('active', myCallback);
});
