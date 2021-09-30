import { format, formatDistance, formatRelative, subDays } from 'date-fns';

format(new Date(), "'Today is a' eeee");
//=> "Today is a Wednesday"

formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });
//=> "3 days ago"

formatRelative(subDays(new Date(), 3), new Date());
