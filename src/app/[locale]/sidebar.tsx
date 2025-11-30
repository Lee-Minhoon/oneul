"use client";

import { usePathname } from "@/lib/i18n/navigation";
import { findNavHierarchy, navigationItems, toUrl } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function MainLayoutSidebar() {
  const t = useTranslations("sidebar");
  const pathname = usePathname();

  return (
    <div className="w-60">
      <ul className="flex flex-col gap-2 px-2">
        {navigationItems.map((item) => {
          return (
            <li key={item.label} className="flex">
              <Link
                key={item.label}
                href={{
                  pathname: toUrl(item.pathname),
                  query: item.searchParams,
                }}
                className={cn(
                  "flex-1 flex gap-2 items-center text-sm hover:bg-muted p-2 rounded-md",
                  findNavHierarchy(pathname).includes(item) ? "bg-muted" : ""
                )}
              >
                <item.icon className="size-4" />
                {t(item.label)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
