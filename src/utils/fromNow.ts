import { formatDistanceToNowStrict, parseISO } from 'date-fns'

function fromNow(instant: string): string {
  const date = parseISO(instant)

  return formatDistanceToNowStrict(date, { addSuffix: true })
}

export default fromNow
