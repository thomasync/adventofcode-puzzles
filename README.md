<div align="center">    
    <img src="imgs/calendar.png" alt="My Advent Of Code Calendar" />
</div>

# <div align="center">My Advent Of Code puzzle solutions</div>  

[![Test puzzles](https://github.com/thomasync/adventofcode-puzzles/actions/workflows/tests.yml/badge.svg)](https://github.com/thomasync/adventofcode-puzzles/actions/workflows/tests.yml)

Based on the site [Advent Of Code](https://adventofcode.com/) created by [Eric Wastl](https://github.com/topaz).

Every December, they give out an advent calendar which allows people to have fun solving puzzles.

I decided to solve these in **typescript**.

To concentrate only on the puzzles, I set up a reloading system that executes the last modified **ts** file and automatically transpiles it to display the result in the console.

    npm run start

But it's also possible to generate the **js** files.

    npm run build


And you can generate a calendar, because otherwise it's sad without colors!

    npm run calendar
    
