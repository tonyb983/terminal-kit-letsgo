import { Random, nodeCrypto, Engine } from 'random-js'

/*
Random API:

import { bool } from "./distribution/bool";
import { date } from "./distribution/date";
import { dice } from "./distribution/dice";
import { die } from "./distribution/die";
import { hex } from "./distribution/hex";
import { int32 } from "./distribution/int32";
import { int53 } from "./distribution/int53";
import { int53Full } from "./distribution/int53Full";
import { integer } from "./distribution/integer";
import { pick } from "./distribution/pick";
import { real } from "./distribution/real";
import { realZeroToOneExclusive } from "./distribution/realZeroToOneExclusive";
import { realZeroToOneInclusive } from "./distribution/realZeroToOneInclusive";
import { sample } from "./distribution/sample";
import { shuffle } from "./distribution/shuffle";
import { string } from "./distribution/string";
import { uint32 } from "./distribution/uint32";
import { uint53 } from "./distribution/uint53";
import { uint53Full } from "./distribution/uint53Full";
import { uuid4 } from "./distribution/uuid4";
import { nativeMath } from "./engine/nativeMath";
import { Engine } from "./types";
*/

class TestEngine implements Engine
{
  private index = 0;
  private values: number[] = [];
  private getNextValue = () => 0;

  public constructor(args?: number[]){
    if(args == null){
      this.index = 0;
      this.values = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    }
  }

  next(): number {
    return this.getNextValue();
  }
}

const seed = 0;
const createRng = () => {
  return new Random(nodeCrypto);
}

const createTestRng = (arr?: number[]) => {

}

let r: Random | null = null;
let isInit: boolean = false;
const get = () => {
  if(r === null){
    r = createRng();
  }
  
  return r;
}

const RNG = {
  isInit,
  get,
}
