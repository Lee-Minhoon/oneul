import { CalendarIcon, HomeIcon, LucideIcon } from "lucide-react";
import { Pages } from "./routes";
import { compile, match } from "path-to-regexp";

type SidebarLabels = "home" | "calendar";

interface NavigationItem {
  icon: LucideIcon;
  label: SidebarLabels;
  pathname: Pages;
  searchParams?: Record<string, string>;
  children?: NavigationItem[];
}

export const navigationItems: NavigationItem[] = [
  {
    icon: HomeIcon,
    label: "home",
    pathname: Pages.Home,
  },
  {
    icon: CalendarIcon,
    label: "calendar",
    pathname: Pages.Calendar,
  },
] as const;

export function toUrl(path: Pages, params?: object) {
  return compile(path, { encode: encodeURIComponent })(
    Object.fromEntries(
      Object.entries(params || {}).map(([key, value]) => [
        key,
        value.toString(),
      ])
    )
  );
}

/**
 * Recursively finds the hierarchy of nav items that match the given pathname.
 * Which can be useful highlighting the active nav item in a navigation bar or breadcrumbs.
 * @param pathname the pathname to match
 * @param current the current nav items to search
 * @param parents the accumulated parent nav items
 * @returns parent nav items containing the matching nav item for the pathname
 */
export function findNavHierarchy(
  pathname: string,
  current = navigationItems,
  parents: NavigationItem[] = []
): NavigationItem[] {
  for (const item of current) {
    if (match(item.pathname)(pathname)) {
      return [...parents, item];
    }
    if (item.children) {
      const navs = findNavHierarchy(pathname, item.children, [
        ...parents,
        item,
      ]);
      if (navs.length) {
        return navs;
      }
    }
  }
  return [];
}
