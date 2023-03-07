const SectionCodeBlock = () => {
  return (
    <div className='sandpack sandpack--codeblock bg-wash  dark:bg-gray-95 my-8" light:bg-gray-code-block flex h-full w-full items-center overflow-x-auto rounded-lg shadow-lg lg:mx-64'>
      <div className="sp-code-editor">
        <pre className="sp-cm sp-pristine sp-javascript align-start flex">
          <code className="sp-pre-placeholder grow-[2]">
            <div className="cm-line ">
              <span className="sp-syntax-keyword">import</span>{' '}
              <span className="sp-syntax-punctuation"></span>{' '}
              <span className="sp-syntax-plain">useMemo</span>{' '}
              <span className="sp-syntax-punctuation"></span>{' '}
              <span className="sp-syntax-keyword">from</span>
              <span className="sp-syntax-string px-2">&apos;react</span>
              <span className="sp-syntax-punctuation">;</span>
              <br />
            </div>
            <div className="cm-line ">
              <span className="sp-syntax-keyword">import</span>
              <span className="sp-syntax-punctuation"></span>{' '}
              <span className="text-yellow-400">{'{'}</span>
              <span className="studio-code-yellow pl-2 ">getRoutines</span>{' '}
              <span className="text-yellow-500">{'}'}</span>
              <span className="sp-syntax-punctuation"></span>{' '}
              <span className="sp-syntax-keyword">from</span>
              <span className="studio- studio-code-orange px-2">
                &apos;@/api/
                <span className=" studio-code-orange">
                  v1<span className="">.</span>
                </span>
                li...
              </span>
              <span className="sp-syntax-punctuation">;</span>
              <br />
            </div>
            <div className="cm-line ">
              <span className="sp-syntax-keyword">import</span>{' '}
              <span className="sp-syntax-punctuation"></span>
              <span className=" pr-1 text-yellow-500">{'{'}</span>
              <span className="pl-1 text-teal-500">GET</span>{' '}
              <span className="text-yellow-500">{'}'}</span>
              <span className="sp-syntax-punctuation"></span>{' '}
              <span className="sp-syntax-keyword">from</span>
              <span className="sp-syntax-string px-2">
                &apos;@/api/v1/constants/request.methods
              </span>
              <span className="sp-syntax-punctuation">;</span>
              <br />
            </div>

            <div className="cm-line ">
              <span className="sp-syntax-keyword">import</span>{' '}
              <span className="sp-syntax-punctuation"></span>
              <span className="text-yellow-400">{'{'}</span>
              <span className="pl-2 text-pink-400">theme</span>{' '}
              <span className="text-yellow-500">{'}'}</span>
              <span className="sp-syntax-punctuation"></span>{' '}
              <span className="sp-syntax-keyword">from</span>
              <span className="studio-code-brown px-2">
                &apos;@/styles/
                <span className="text-orange-300">
                  mopdules<span className="">.</span>
                </span>
                tailwindCustomstyles
              </span>
              <span className="sp-syntax-punctuation">;</span>
              <br />
            </div>
            <div className="cm-line ">
              <br />
            </div>
            <div className="cm-line">
              <span className="studio-code-purple pr-2">export</span>
              <span className="pr-2 text-sky-400">async</span>
              <span className="sp-syntax-keyword pr-2">function</span>
              <span className="sp-syntax-definition">GetInGoodShape</span>
              <span className="sp-syntax-punctuation">(</span>
              <span className="sp-syntax-punctuation"></span>{' '}
              <span className="sp-syntax-property">routines</span>
              <span className="sp-syntax-punctuation">,</span>{' '}
              <span className="sp-syntax-property">tab</span>
              <span className="sp-syntax-punctuation">,</span>{' '}
              <span className="sp-syntax-property">theme</span>{' '}
              <span className="sp-syntax-punctuation">{'}'}</span>
              <span className="sp-syntax-punctuation"></span>
              <span className="sp-syntax-punctuation">)</span>{' '}
              <span className="sp-syntax-punctuation"></span>
              <br />
            </div>

            <div className="cm-line ">
              <span className="main-blue">const</span>{' '}
              <span className="sp-syntax-punctuation"></span>{' '}
              <span className="text-yellow-400">{'{'}</span>
              <span className="pl-2 text-slate-100 ">routines</span>{' '}
              <span className="text-yellow-400">{'}'}</span>
              <span className="pl-2 text-yellow-500">{'='}</span>
              <span className="sp-syntax-punctuation"></span>{' '}
              <span className="sp-syntax-keyword pr-2">await</span>
              <span className="studio- studio-code-orange">
                <span className="studio-code-yellow">getRoutines</span>
                <span className="studio-code-yellow">{'('}</span>{' '}
                <span className="-pl-1 text-teal-500">{'GET'}</span>
                <span className="sp-syntax-punctuation"></span>{' '}
                <span className="studio-code-yellow">{')'}</span>
              </span>
              <span className="sp-syntax-punctuation">;</span>
              <br />
            </div>
            <div className="cm-line ">
              {' '}
              <span className="main-blue">const</span>{' '}
              <span className="code-step bg-purple-40 border-purple-40 text-purple-60 dark:text-purple-30 relative rounded border-b-[2px] border-opacity-60 bg-opacity-10 px-1 py-[1.5px] dark:bg-opacity-20">
                completedRoutine
              </span>{' '}
              <span className="text-slate-100 dark:text-white">= </span>{' '}
              <span className="sp-syntax-definition">useMemo</span>
              <span className="sp-syntax-punctuation">(</span>
              <span className="code-step border-blue-40  text-blue-30 dark:text-blue-60 relative rounded border-b-[2px] border-opacity-60 bg-blue-100 bg-blue-200 bg-opacity-10 px-1  py-[1.5px] text-white dark:bg-opacity-20 ">
                <span className="studio-code-orange"> () =&gt;</span>{' '}
                filterRoutines(routines, tab)
              </span>
              <span className="sp-syntax-punctuation pr-2">,</span>
              <span className="code-step bg-yellow-40 border-yellow-40 text-yellow-60 dark:text-yellow-30 relative rounded border-b-[2px] border-opacity-60 bg-opacity-10 px-1 py-[1.5px] dark:bg-opacity-20">
                [<span className="text-white">routines, tab</span>]
              </span>
              <span className="sp-syntax-punctuation">)</span>
              <span className="sp-syntax-punctuation">;</span>
              <br />
            </div>
            <div className="cm-line py-4 ">
              <span className="sp-syntax-comment">
                <span>{'// Do some push-ups...'}</span>
              </span>
              <br />
            </div>
            <div className="cm-line ">
              <span className="sp-syntax-punctuation"></span>
            </div>

            {/* /// */}

            <div className="cm-line ">
              <span className="sp-syntax-punctuation">
                <div className="cm-line ">
                  <span className="sp-syntax-keyword">return</span>
                  <span className="sp-syntax-punctuation">(</span>
                  <br />
                </div>
                <div className="cm-line ">
                  {' '}
                  <span className="sp-syntax-punctuation pl-10">&lt;</span>
                  <span className="sp-syntax-tag text-yellow-500">div</span>
                  <span className="sp-syntax-property px-2">className</span>=
                  <span className="sp-syntax-punctuation">{'{'}</span>
                  <span className="theme text-pink-400">theme</span>
                  <span className="sp-syntax-punctuation">{'}'}</span>
                  <span className="sp-syntax-punctuation">&gt;</span>
                  <br />
                </div>
                <div className="cm-line bg-github-highlight ml-20 dark:bg-opacity-10">
                  {' '}
                  <span className="sp-syntax-punctuation">&lt;</span>
                  <span className="sp-syntax-definition ">List</span>
                  <span className="sp-syntax-property">items</span>
                  <span className="px-1">=</span>
                  <span className="sp-syntax-punctuation">{'{'}</span>
                  <span className="sp-syntax-plain">compltetedRoutine</span>
                  <span className="sp-syntax-punctuation">{'}'}</span>
                  <span className="sp-syntax-punctuation">/&gt;</span>
                  <br />
                </div>
                <div className="cm-line ">
                  {' '}
                  <span className="sp-syntax-punctuation pl-10">&lt;/</span>
                  <span className="sp-syntax-tag text-yellow-500">div</span>
                  <span className="sp-syntax-punctuation">&gt;</span>
                  <br />
                </div>
                <div className="cm-line ">
                  <span className=" sp-syntax-punctuation pl-10">)</span>
                  <span className="sp-syntax-punctuation">;</span>
                  <br />
                </div>
                <div className="cm-line ">
                  <span className="sp-syntax-punctuation">{'}'}</span>
                </div>
              </span>
            </div>

            {/*  */}
          </code>
        </pre>
      </div>
    </div>
  )
}

export { SectionCodeBlock }
