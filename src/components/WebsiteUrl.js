import Link from 'next/link'

export const WebsiteUrl = ({ link, href }) => {
  return (
    <p
      class="geist-themed geist-default geist-ellipsis entity_title__x_lPl geist-text geist-text-no-margin body-2 w-600"
      type="default"
    >
      <Link
        href={href}
        rel="noopener"
        target="_blank"
        className="geist-secondary flex text-lg"
      >
        {link}
        <svg
          data-testid="geist-icon"
          fill="none"
          height="1em"
          shape-rendering="geometricPrecision"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="1em"
          class=" link_externalIcon__lLA3x  mt-1 ml-2"
          // style="color: currentcolor;"
        >
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
          <path d="M15 3h6v6"></path>
          <path d="M10 14L21 3"></path>
        </svg>
      </Link>
    </p>
  )
}
