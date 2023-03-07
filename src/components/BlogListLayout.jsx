import clsx from 'clsx'
import { Container } from './Container'
import { ContainerNoPadding } from './Container'
import { CustomizedContainer } from './CustomizedContainer'
export function BlogListLayout({ className, title, intro, children }) {
  return (
    <>
      <CustomizedContainer
        id="blogs-list-page"
        page={true}
        header
        title={'Hundreds of blogs and leading articles.'}
        margin="noMargin"
        note
        variant="small"
        bgColor="wheat"
        band={true}
        bandcolor="bg-blue-2"
        bandtext="Only writting about what passionates me"
        section={'blogs'}
        titleColors="text-slate-800 dark:text-slate-100"
        sectionNameinnerStyle={'container-hero-top-content'}
      >
        <div id="blogs-list-main">{children}</div>
      </CustomizedContainer>
    </>
  )
}
