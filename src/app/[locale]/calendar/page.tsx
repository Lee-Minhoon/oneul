import { getCalendarDateList } from "@/lib/date";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

const DAYS_OF_WEEk = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"] as const;

export default function Calendar() {
  const t = useTranslations("calendar.days");
  const dateList = useMemo(() => getCalendarDateList(new Date()), []);

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-7">
        {DAYS_OF_WEEk.map((day) => (
          <div key={day} className="flex-1 text-center">
            {t(day)}
          </div>
        ))}
        {dateList.map((date) => (
          <div key={date.toISOString()} className="flex-1 text-center">
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}
