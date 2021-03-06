import type { LastType, Push } from '../';

/**
 * Constructs a tuple type from each member of `T`.
 *
 * @example
 * ```ts
 * type T0 = TupleOf<'a' | 'b' | 'c'>;
 * //	^ = type T0 = ["a", "b", "c"]
 * ```
 */
export type TupleOf<T> = [T] extends [never] ? [] : Push<TupleOf<Exclude<T, LastType<T>>>, LastType<T>>;
