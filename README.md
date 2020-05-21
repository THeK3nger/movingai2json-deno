# movingai2json [![Build Status](https://travis-ci.org/THeK3nger/movingai2json.svg)](https://travis-ci.org/THeK3nger/movingai2json) [![npm](https://img.shields.io/npm/v/movingai2json.svg?maxAge=2592000)](https://www.npmjs.com/package/movingai2json) [![npm](https://img.shields.io/npm/dt/movingai2json.svg?maxAge=2592000)](https://www.npmjs.com/package/movingai2json)

**MovingAI2JSON** is a simple *JavaScript* library to parse [Moving AI][2]
benchmark `.map` and `.scen` files into a JSON data structure.

The library also provide simple tools to handle the resulting objects, such as
computing tiles traversability and movement cost between adjacents tiles.


## Usage

### Library Usage

The library is composed by two main functions: `parseMapString(string)` and `parseScenString(string)`. This function takes as argument the string representing the map (or the scen file) in the MovingAI format. This string can be obtained by file or by any other input, it does not matter.

### CLI Usage

The program can be run in the command line in order to automaitcally convert all files in the specified folder.

    node movingai2json batch <folder_path>

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

## Dependencies

The async package is required **only** for the CLI batch command. If you want to use this package as a library you can also avoid to use async.

## TODO:

There is some additional features that can be implemented

 - [x] Parser for the .scen files.
 - [ ] Utility functions to handle standard common operation on the map (distances, cost, traversability and so on).
 - [x] CLI to batch several .map file into .json files.

## License

The library is released under [the MIT license][1]

 [1]: LICENSE
 [2]: http://movingai.com/
