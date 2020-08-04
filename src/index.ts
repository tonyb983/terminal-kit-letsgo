import App, { ReturnCode } from './app';

console.log('Starting App');
App()
  .then((returnCode: ReturnCode) => console.log('App returned with code ' + returnCode))
  .catch((err:any) => console.log('Unhandled exception from App: ' + err)); 
