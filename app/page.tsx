/*
  Description : This is the home page.
  Route       : `{host}/`
  Requires    : Hero (Component)
  Author      : Prince Dalsaniya
*/

// Imports
import { Hero } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
    </main>
  )
}
