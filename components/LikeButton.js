import { useState } from 'react'
import { useTranslation } from 'next-i18next'

import { fetcher } from '@io/lib/fetcher'

export default function LikeButton({ slug }) {
  const [wasLiked, setLike] = useState(false)
  const { t } = useTranslation('common')
  
  const handleLike = async (event) => {
    event.preventDefault()
    const slug = event.currentTarget.getAttribute('data-slug')

    if (slug) {
      setLike(true)
      const like = await fetcher(`/api/likes/${slug}`, {
        method: 'POST',
      })

      if (!like) {
        setLike(false)
        console.error('Cannot be liked! %s', JSON.stringify(like))
      }
    }
  }

  return <button
    onClick={handleLike}
    data-slug={slug}
    className="flex flex-row justify-between items-center group"
  >
    {!wasLiked ? (
      <>
        <span>{t('like-click-call')}</span>
        <span className="ml-2 text-gray-600 p-1 rounded-full flex group-hover:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </span>
        <span className="ml-2 text-red-600 p-1 rounded-full hidden group-hover:flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </span>
      </>
    ) : (
      <>
        <span>{t('like-click-done')}</span>
        <span className="ml-2 text-red-600 p-1 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </span>
      </>
    )}
  </button>
}