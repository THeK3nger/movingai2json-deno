import {
  parseMapString,
  parseMapFile,
  parseScenString,
} from "../movingai2json.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("Parsing String", async () => {
  const mapStr = await Deno.readTextFile("./test/keydoor.map");
  let parsedMap = parseMapString(mapStr);

  assertEquals(parsedMap.width, 20);
  assertEquals(parsedMap.height, 20);
});

Deno.test("Parsing File", async () => {
  await parseMapFile("./test/keydoor.map");
  const jsonMap = await Deno.readTextFile("./test/keydoor.map.json");
  const parsedMap = JSON.parse(jsonMap);

  assertEquals(parsedMap.width, 20);
  assertEquals(parsedMap.height, 20);
});

Deno.test("Parsing Scen String", async () => {
  const mapStr = await Deno.readTextFile("./test/arena.map.scen");
  let parsedScen = parseScenString(mapStr);
});
