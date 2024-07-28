import { type Author } from '@/interfaces/author'
import Link from 'next/link'
import CoverImage from './cover-image'

import { Dancing_Script } from 'next/font/google'

const dancing = Dancing_Script({ subsets: ['latin'] })

type Props = {
  title: string
  coverImage: string
  excerpt: string
  slug: string
}

export function PostPreview({ title, coverImage, slug, excerpt }: Props) {
  return (
    <div className="mb-8 overflow-hidden rounded-2xl bg-white bg-opacity-70 shadow-md shadow-black backdrop-opacity-80 dark:bg-gray-800">
      <h2
        className={`text-center text-5xl font-bold leading-tight tracking-tighter md:text-7xl ${dancing.className} text-outline-right text-red-600`}
      >
        <Link href={`/produkter/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h2>
      <p className="mb-4 text-center text-lg leading-relaxed">{excerpt}</p>

      <div>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
    </div>
  )
}
