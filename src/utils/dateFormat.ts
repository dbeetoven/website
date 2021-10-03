import { format, formatDistance, formatRelative, subDays } from 'date-fns'

/**
 * TODO: create generic format functions.
 */

format(new Date(), 'MM/dd/yyyy')
//=> "Today is a Wednesday"

formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
//=> "3 days ago"

formatRelative(subDays(new Date(), 3), new Date())
