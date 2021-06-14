# jekyll-tailwind
This repository contains a working demonstration of how to use Tailwind JIT mode with Jekyll.

## Rationale
Jekyll is an amazing static site generator, and Tailwind is an amazing CSS library. Messing with Webpack and related tools makes me sad, because it's always super complicated and hard to configure. Besides, marrying Tailwind with Jekyll gives you front matter and Liquid, which are two very powerful tools.

## Development
Run `npm run serve`, and edit any one of the files - it'll update live in your browser if you go to `localhost:4000`.

## Production
Run `npm run build`, and the output will be in the `build` directory.

## Cleaning
Run `npm run clean`, and any build artifacts will be cleaned up. Great for updating `@import`ed CSS files, as the `jekyll-postcss` function doesn't properly update Jekyll when an included file is updated.
