import { sleep } from './utility/sleep';

export type ReturnCode = 'Ok' | 'Error' | number;

const App = async (args?: string[]): Promise<ReturnCode> => {
  console.log('App entered.\nArgs: ' + args?.join(',') ?? 'null');
  await sleep(1000);
  
  return 'Ok';
}
  
export default App;  
