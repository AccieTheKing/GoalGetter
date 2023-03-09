import Head from 'next/head'

type Props = {
  title: string
}

export default function BrowserTitleHeading({ title }: Props) {
  return (
    <Head>
      <title>GoalGetter - {title}</title>
    </Head>
  )
}
