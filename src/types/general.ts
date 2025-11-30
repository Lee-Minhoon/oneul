type Optional<T> = T | undefined;
type NonOptional<T> = T extends undefined ? never : T;
type Nullable<T> = T | null;
type NonNullable<T> = T extends null ? never : T;
type Nullish<T> = Optional<Nullable<T>>;
type NonNullish<T> = NonOptional<NonNullable<T>>;

export type {
  Optional,
  NonOptional,
  Nullable,
  NonNullable,
  Nullish,
  NonNullish,
};
