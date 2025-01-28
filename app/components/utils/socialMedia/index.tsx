import { socialMedia } from '@/data'
import Link from 'next/link'

export default function SocialMedia() {
  return (
    <div className="grid justify-center">
      <div className='grid pt-1'>
        {socialMedia.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 mx-2 sm:my-2 my-2 text-white justify-center"
          >
          </Link>
        ))}
      </div>
    </div>
  )
}