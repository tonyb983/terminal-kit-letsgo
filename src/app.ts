import { terminalTest } from './terminalTest';
import { sleep } from './utility/sleep';

export type ReturnCode = 'Ok' | 'Error' | number;

const App = async (args?: string[]): Promise<ReturnCode> => {
  console.log('App entered.\nArgs: ' + args?.join(',') ?? 'null');
  await sleep(1000);
  console.log('Starting Terminal Test');
  await terminalTest();
  return 'Ok';
}
  
export default App;  
