import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useMemo, useState, useCallback } from 'react'
import Image from 'next/image'

import { forwardRef } from 'react'
import Link from 'next/link'
import projectsList from '../../lib/projectsJson'
import { NextButton } from '../PageCommonPaginators'

export function Project({
  as: Component = 'div',
  className,
  children,
  project,
  ...props
}) {
  // console.log('PROPPSSSSS-CATEG', props.projectCategory)
  return <Project.Heading {...props} />
}

Project.Heading = function Project({ children, ...props }) {
  console.log(' HEADING PROPS', props.activeProject)

  return (
    <div
      key={props.id}
      className={clsx(
        // props.activeProject == props.projecttitle
        //   ? `${props.projectThemeColor}`
        //   : props.projectDefaultTheme.isInactiveProjectBorder,
        'group relative  flex flex-none flex-col items-start  px-4 pt-2 pb-4  text-left md:w-[16vw] md:pb-2 lg:w-auto '
      )}
    >
      <h3 className="md:mt-4 md:hidden">
        <button
          key={props.id + props.projecttitle}
          onClick={() => props.onSelected(props.projecttitle)}
          type="button"
          className={
            props.activeProject === props.projecttitle
              ? `rounded-md border bg-white px-4 text-base   font-semibold leading-7 text-black dark:text-black  lg:text-xl`
              : 'rounded-md border border-slate-700 bg-slate-700 px-2  font-semibold leading-7 text-white  text-white dark:text-white lg:text-xl'
          }
        >
          <span className="absolute inset-0 -top-px"></span>
          {props.projecttitle}
        </button>
      </h3>
      <h3 className="hidden md:mt-4 md:flex">
        {/* dark:${props.projectThemeTextColor} ${props.projectThemeTextColor} */}
        <button
          id={props.projecttitle + 'Desktop'}
          key={props.id + props.projecttitle}
          onClick={() => props.onSelected(props.projecttitle)}
          type="button"
          className={
            props.activeProject === props.projecttitle
              ? `${
                  props.activeProject + props.projecttitle
                } rounded-md  bg-slate-800 px-2 text-base font-semibold leading-7  text-red-500 text-sky-400 dark:bg-black dark:text-sky-400 lg:text-xl 
         
              `
              : `
                 font-semibold leading-7 text-slate-100 text-slate-300 dark:text-slate-100  md:text-slate-200 lg:text-xl`
          }
        >
          <span className="absolute inset-0 -top-px"></span>
          {props.projecttitle}
        </button>
      </h3>
      <p
        className={clsx(
          props.activeProject === props.projecttitle
            ? `flex border-slate-800 px-2 py-1 text-center text-sm leading-6 text-sky-400 text-black shadow-lg md:order-first md:rounded-md md:bg-white 
             md:px-2  md:text-xs  md:font-semibold md:leading-7 md:text-black lg:px-4`
            : `${props.defaultTheme} px-3  text-sm leading-6 text-white  group-hover:bg-sky-400 group-hover:text-slate-900 md:order-first
            md:rounded-full  md:bg-slate-500 md:px-2 md:text-xs  md:font-semibold md:leading-7  lg:px-4 `
        )}
      >
        {props.projectCategory}{' '}
        {/* {props.activeProject === props.projectname && (
          <span className="px1 rounded-full bg-sky-500 py-1">.</span>
        )} */}
      </p>
      <p
        className={`${
          props.activeProject === props.projecttitle && 'bg-white'
          // props.projectBgThemeColor
        } mt-2 hidden rounded-md py-4 px-1 text-sm leading-6 text-slate-700  dark:text-gray-400 md:block md:px-3 md:py-1 
        ${props.activeProject === props.projecttitle && 'text-slate-800'}
        `}
      >
        {props.projectdescription}
      </p>
    </div>
  )
}
//  props.activeProject === props.projectname && 'text-white'
// Project.Image = function ProjectImage({ imgProps }) {
//   console.log('imgProps', imgProps)
//   const { alt, src, id} = imgProps
//   return <Image src={src} alt={alt} sizes="100vw" />
// }

const SectionProjects = forwardRef(
  (className, defaultActiveProjectName, projectsSection, ref, ...props) => {
    const [activeProject, setActiveProject] = useState(projectsList[2].title)
    // console.log('Projectsss REf:', ref)

    const defaultTheme = useMemo(() => {
      return {
        isInactivePetBorder:
          'border-t border-transparent hover:border-slate-400',
        isInactivePetBtn:
          'md:bg-slate-100 md:text-slate-500 md:group-hover:bg-slate-200 px-2 py-2',
      }
    })
    // const projectsSection = useRef(null)
    const projects = useMemo(() => {
      const handleSetActiveProjectTab = function (title) {
        setActiveProject(title)
      }
      const getProjectThemeColor = (idx, projectTheme) => {
        if (activeProject == idx) {
          console.log('SHOULD FILL IN ID', idx, projectTheme)
          return projectTheme
        } else if (!activeProject === idx) {
          console.log('SHOULD FILL PROJECT 1 ', idx, projectTheme)
          return projectDefaultTheme.isActiveColorProps
        } else {
          // console.log('SHOULD NOT FILL', color.unfilled)
          return projectTheme
        }
      }

      // highLightProject()
      return projectsList.slice(0, 5).map((project) => {
        // console.log('PROJECT-ID, ', project.id)
        return (
          <Project
            key={project.id}
            projecttitle={project.title}
            projectdescription={project.description}
            projectCategory={project.category}
            activeProject={activeProject}
            projectBgThemeColor={project.theme.bgcolor}
            projectThemeColor={project.theme.color}
            projectThemeTextColor={project.theme.textcolor}
            projectDefaultTheme={defaultTheme}
            activeproject={activeProject}
            defaultActiveProjectName={activeProject}
            onSelected={() => handleSetActiveProjectTab(project.title)}
          />
        )
      })
    }, [activeProject, defaultActiveProjectName, defaultTheme])

    return (
      <>
        <section
          // ref={ref}
          key={'projects-gallerry'}
          className={clsx(
            className,
            'overflow-hiddenpy-12 mx-4 mt-8  px-8 md:mt-0 md:px-10 md:py-2 lg:mx-4 lg:mt-16 xl:mx-20 '
          )}
        >
          <div className="max-w-container mx-auto lg:px-8">
            <div className="max-w-3xl ">
              <p className="typography-section-headline headline  tracking-tight text-slate-100 text-slate-200  dark:text-slate-100">
                Production-ready projects.
              </p>
            </div>
            <div className="max-w-xl ">
              <p className="mt-4 text-base leading-7 text-slate-300 dark:text-slate-300">
                Projects I had the opportunity to built with Next.js, React
                Native, React and , VueJs amongst others. Every project will
                redirect you to a fully dedicated page.{' '}
                <div id="project-see-btn" className="sr-only md:not-sr-only">
                  <NextButton
                    text="See More"
                    href="/podcasts"
                    customize="bg-transparent hover:bg-black"
                  />
                </div>
              </p>
            </div>
            <div className="basic_highlight dark:basic_highlight mt-6 inline-flex items-center rounded-md px-2 pb-1 text-slate-800  dark:text-slate-100/80 md:ml-4 md:hidden md:pb-0 lg:px-4">
              <Link
                className="subtle-link text-base text-xl font-semibold text-slate-400 hover:text-black"
                href="/projects"
              >
                Scrollable bar bellow | See more projects
              </Link>
              <span
                aria-hidden="true"
                className="dark:text-sky400 ml-2 text-sky-500 "
              >
                ???
              </span>
            </div>

            <div className="mt-8 flex overflow-x-auto  lg:block">
              <div className=" min-w-full flex-none px-4 sm:px-2">
                <div className="flex space-x-6  md:space-x-3 lg:grid lg:grid-cols-5 lg:gap-x-0 lg:space-x-0">
                  {projects}
                </div>
              </div>
            </div>
            <div
              className="flex transition-transform duration-500"
              // style="transform: translateX(0%);"
            >
              {projectsList.map((i) => (
                <>
                  {activeProject === i.title && (
                    <div
                      className="w-full flex-none sm:px-4"
                      // key={i.id}
                      id={i.title.toLocaleLowerCase()}
                    >
                      <p
                        className={`${i.theme.bgcolor} text-md rounded-lg py-2 px-8 leading-6 text-slate-700 dark:text-gray-200 sm:px-0 md:hidden`}
                      >
                        {i.description}
                      </p>
                      <Image
                        className="mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0"
                        key={i.id}
                        src={i.projectImage.src}
                        alt={i.projectImage.alt}
                        sizes="100vw"
                      />
                      {/* <Project.Image
                        key={`${i.title + i.id}`}
                        imgProps={i.projectImage}
                        className="mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0"
                      /> */}
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }
)

export { SectionProjects }
SectionProjects.displayName = 'SectionProjects'

// SectionProjects.propTypes = {
//   projectDefaultTheme: PropTypes.object,

//   projectDefaultTheme: {
//     isActiveColorProps: PropTypes.string,
//     isInactiveProjectBtn: PropTypes.string,
//   },
//   defaultActiveProjectName: PropTypes.string,
// }

// SectionProjects.defaultProps = {
//   defaultActiveProjectName: projectsList[2].title,

//   projectDefaultTheme: {
//     isInactiveProjectBorder:
//       'border-t border-transparent hover:border-slate-400',
//     isInactiveProjectBtn:
//       'md:bg-slate-100 md:text-slate-500 md:group-hover:bg-slate-200',
//   },
// }
