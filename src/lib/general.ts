import { NonOptional, Optional } from "@/types/general";

function resolveDefaults<
  TDefaults extends Optional<object>,
  TOverrides extends Partial<NonOptional<TDefaults>>,
>(defaults: TDefaults, overrides: TOverrides) {
  return { ...overrides, ...defaults };
}

export { resolveDefaults };
