'use client'
import Image from 'next/image'
import PageHeaderToggle from '@/components/PageToggle/PageHeaderToggle'
import { useState } from 'react'

export default function Home() {
  const [toggleActive, setToggleActive] = useState(false)

  return (
    <main>
      <PageHeaderToggle active={toggleActive} />
    </main>
  )
}
