import { nip, head, constrain } from './algo';

test("testing nip",
  () => expect(nip([1,2,3,4,5])).toEqual([1,2,3,4]) );

test("testing nip empty",
  () => expect(nip([])).toEqual([]) );

test("testing head()",
  () => expect(head([1,2,3,4,5])).toBe(1) );

test("testing constrain()",
  () => expect(constrain(11)(50)).toEqual(6) );