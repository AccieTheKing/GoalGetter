'use client'
import Image from 'next/image'
import PageHeaderToggle from '@/components/PageToggle/PageHeaderToggle'
import { useState } from 'react'

export default function Home() {
  const [toggleActive, setToggleActive] = useState(false)
const mockData = Array.from({ length: 20 }, (_, i) => ({
  title: `Goal ${i + 1}`,
  description: `Description ${i + 1}`,
}))

  return (
    <main>
      <PageHeaderToggle active={toggleActive} />
    </main>
  )
}
