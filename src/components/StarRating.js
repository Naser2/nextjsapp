import React, { useMemo, useState } from 'react'
import propTypes from 'prop-types'

const Star = ({ idx, style, onRating }) => {
  console.log('STYLE', style)
  return (
    <>
      <svg
        onClick={() => onRating(idx)}
        // className={`h-5 w-5 flex-shrink-0 cursor-pointer ${color}`}
        // style={style}
        fill="currentColor"
        className={`h-5 w-5 flex-shrink-0 cursor-pointer lg:h-7 lg:w-7 ${style} `}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clipRule="evenodd"
        />
      </svg>
    </>
  )
}

export const StarRating = ({ count, rating, color, onRating }) => {
  const [hoverRating, sethoverRating] = useState(0)

  // console.log('RATING', rating)

  const stars = useMemo(() => {
    const getRatingColor = (idx) => {
      if (hoverRating >= idx) {
        // console.log('SHOULD FILL IN ID', idx, color.filled)
        return color.filled
      } else if (!hoverRating && rating >= idx) {
        // console.log('SHOULD FILL ALL STARS IDS ', idx, color.filled)
        return color.filled
      } else {
        // console.log('SHOULD NOT FILL', color.unfilled)
        return color.unffilled
      }
    }
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => {
        // console.log('SHOULD FILL IDX', idx)
        return (
          <Star
            key={idx}
            onRating={() => onRating(idx)}
            style={getRatingColor(idx)}
            onMouseEnter={() => sethoverRating(idx)}
            onMouseLeave={() => sethoverRating(0)}
            fill={getRatingColor(idx)}
          />
        )
      })
  }, [
    count,
    onRating,
    sethoverRating,
    color.filled,
    color.unffilled,
    hoverRating,
    rating,
  ])

  return <>{stars}</>
}
StarRating.propTypes = {
  count: propTypes.number,
  rating: propTypes.number,
  color: propTypes.object,
  // color: {
  //   filled: propTypes.string,
  //   unfilled: propTypes.string,
  // },
  onChange: propTypes.func,
}

StarRating.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: 'text-yellow-500',
    unfilled: 'text-blue-100',
  },
}
