import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <header>
        <h1>CPRG306 Advanced Concepts</h1>
      </header>
      <section>
        <Link href="./shopping-list">API Routes</Link>
      </section>
    </main>
  )
}
