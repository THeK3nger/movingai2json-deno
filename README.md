# movingai2json-deno

**MovingAI2JSON** is a simple _TypeScript_ library to parse [Moving AI][2]
benchmark `.map` and `.scen` files into a JSON data structure for Deno.

The library also provide simple tools to handle the resulting objects, such as
computing tiles traversability and movement cost between adjacents tiles.

## Usage

### Library Usage

The library is composed by two main functions: `parseMapString(string)` and `parseScenString(string)`. This function takes as argument the string representing the map (or the scen file) in the MovingAI format. This string can be obtained by file or by any other input, it does not matter.

### CLI Usage

The program can be run in the command line in order to automaitcally convert all files in the specified folder.

    deno run --unstable src/movingai2json.ts -batch <folder_path>

This is useful to automatically convert a full benchmark database.

### Output

The map output is a JSON data structure in this format:

    {
      height:// The map height.
      width: // The map width.
      type:  //The map type (octile is the default)
      matrix: [[tile]] // A matrix of tile chars.
    }

The scen output is a JSON data structure in this format:

    [
      {
        bucket:       // The bucket index.
        map:          // The corresponding map file in the benchmark.
        mapWidth:     // Map Width
        mapHeight:    // Map Height
        startX:       // X starting coordinate.
        startY:       // Y starting coordinate.
        goalX:        // X goal coordinate.
        goalY:        // Y goal coordinate.
        optimalLength:// The precomputed optimal length.
      }
      ]

## TODO:

There is some additional features that can be implemented

- [x] Parser for the .scen files.
- [ ] Utility functions to handle standard common operation on the map (distances, cost, traversability and so on).
- [x] CLI to batch several .map file into .json files.

## License

The library is released under [the MIT license][1]

[1]: LICENSE
[2]: http://movingai.com/
