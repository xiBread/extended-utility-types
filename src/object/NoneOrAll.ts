/**
 * Constructs a type by making each property in `T` optional or using the original state of `T`'s
 * properties if one is present.
 *
 * @example
 * ```ts
 * interface Profile {
 * 	firstName: string;
 * 	lastName: string;
 * 	age: number;
 * }
 *
 * interface AdditionalInfo {
 * 	state: string;
 * 	city: string;
 * }
 *
 * type User = Profile & NoneOrAll<AdditionalInfo>;
 *
 * const user1: User = {
 * 	firstName: 'John',
 * 	lastName: 'Doe',
 * 	age: 23
 * };
 *
 * const user2: User = {
 * //	^ Types of property 'state' are incompatible.
 * //		Type 'string' is not assignable to type 'never'.
 * 	firstName: 'Bob',
 * 	lastName: 'Jones',
 * 	age: 30,
 * 	state: 'NY'
 * };
 * ```
 */
export type NoneOrAll<T> = T | { [K in keyof T]?: never };
