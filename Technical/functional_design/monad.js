/**
 * Monad
 * 
 * What is a monad? 
 * A context for which values can be wrapped and unwrapped. Being that Monads are Functors,
 * they all should come with a `map` method, as well as something to wrap as well as
 */

const Monad = value => ({
  chain: fn => fn(value),
  fold: () => value,
  map: fn => Monad.of(fn(value)),
  toString: () => `Monad(${vlaue})`
});

Monad.of = Monad;

const Maybe;

const Either;

const Task;
