import {
  addWeeks,
  differenceInWeeks,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { resolveDefaults } from "./general";

interface GetCalendarDateListOptions {
  maxWeeks?: number;
}

function getCalendarDateList(date: Date, options?: GetCalendarDateListOptions) {
  const { maxWeeks } = resolveDefaults(options, { maxWeeks: 6 });

  const start = startOfWeek(startOfMonth(date));
  const end = endOfWeek(endOfMonth(date));

  return eachDayOfInterval({
    start,
    end: addWeeks(end, maxWeeks - 1 - differenceInWeeks(end, start)),
  });
}

export { getCalendarDateList };
