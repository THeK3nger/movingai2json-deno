import {
  parseMapString,
  parseMapFile,
  parseScenString,
} from "../src/movingai2json.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { readFileStr } from "https://deno.land/std/fs/mod.ts";

Deno.test("Parsing String", async () => {
  const mapStr = await readFileStr("./test/keydoor.map");
  let parsedMap = parseMapString(mapStr);

  assertEquals(parsedMap.width, 20);
  assertEquals(parsedMap.height, 20);
});

Deno.test("Parsing File", async () => {
  await parseMapFile("./test/keydoor.map");
  const jsonMap = await readFileStr("./test/keydoor.map.json");
  const parsedMap = JSON.parse(jsonMap);

  assertEquals(parsedMap.width, 20);
  assertEquals(parsedMap.height, 20);
});

Deno.test("Parsing Scen String", async () => {
  const mapStr = await readFileStr("./test/arena.map.scen");
  let parsedScen = parseScenString(mapStr);
});
