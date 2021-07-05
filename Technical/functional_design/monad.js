/**
 * Monad
 * 
 * What is a monad? 
 * A context for which values can be wrapped and unwrapped. Being that Monads are Functors,
 * they all should come with a `map` method, as well as something to wrap as well as
 */

const Monad = value => ({
  // chain is the same as flatMap; unwrapped mapping
  chain: fn => fn(value),
  fold: () => value,
  // mapping
  map: fn => Monad.of(fn(value)),
  toString: () => `Monad(${vlaue})`
});

Monad.of = Monad;

const Maybe;

const Either;

// https://kwijibo.github.io/task-monad-in-javascript/
const Task = fork => ({
  map: f => Task((reject, resolve) => fork(
    reject,
    a => resolve(f(a))
  )),
  chain: f => Task((reject, resolve) => fork(
    reject,
    a => f(a).fork(reject, resolve))
  ),
  fork
});
