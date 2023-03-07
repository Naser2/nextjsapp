export const SuperChagedCodeblock = () => {
  // return  <div className="lg:relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
  return (
    <>
      <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
        {/* <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900"> */}
        <div className="overflow-hidden rounded-tl-xl bg-gray-900">
          <div className="flex bg-gray-800/40 ring-1 ring-white/5">
            <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
              <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 py-2 px-4 text-sky-400 ">
                NotificationSetting.jsx
              </div>
              <div className="border-r border-gray-600/10 py-2 px-4 text-red-400">
                App.jsx
              </div>
              <div className="border-r border-b border-gray-600/10  py-2 px-4 text-white">
                Request.js
              </div>
              <div className="border-r border-b border-gray-600/10  py-2 px-4 text-yellow-500">
                api
              </div>
              <div className="border-r border-b border-gray-600/10  py-2 px-4 text-teal-500">
                Messages.jsx
              </div>
            </div>
          </div>
          <div className="px-6 pt-6 pb-14">
            <div class="px-6 pt-6 pb-14">
              {/* <x-placeholder message="Your code example"> */}
              <pre class="text-[0.8125rem] leading-6 text-gray-300">
                <code>
                  import {<span class="text-[#7dd3fc]">useState</span>} from{' '}
                  <span class="text-emerald-300">'react'</span>
                  <br />
                  import {<span class="text-[#7dd3fc]">Switch</span>} from{' '}
                  <span class="text-emerald-300">'@headlessui/react'</span>
                  <br />
                  <span class="text-sky-500">function </span>
                  <span class="text-indigo-400">CongratulateMembers</span>
                  <span class="text-white">()</span>
                  <span className="sp-syntax-punctuation pl-2">{'{'}</span>
                  <br />
                  <br />
                  <span className="sp-syntax-punctuation pl-10">const </span>[
                  <span class="text-[#7dd3fc]">enabled</span>,
                  <span class="text-[#7dd3fc]"> setEnabled</span>] = useState(
                  <span class="text-[#7dd3fc]">true</span>)
                  <div className="cm-line">
                    <span className="sp-syntax-punctuation">
                      <div className="cm-line ">
                        <span className="sp-syntax-keyword">return</span>
                        <span className="sp-syntax-punctuation">(</span>
                        <br />
                      </div>
                      <div className="cm-line ">
                        {' '}
                        <span className="sp-syntax-punctuation pl-10">
                          &lt;
                        </span>
                        <span className="sp-syntax-tag text-yellow-500">
                          div
                        </span>
                        <span className="sp-syntax-property px-2">
                          className
                        </span>
                        =<span className="sp-syntax-punctuation">{'{'}</span>
                        <span className="theme text-red-400">theme</span>
                        <span className="sp-syntax-punctuation">{'}'}</span>
                        <span className="sp-syntax-punctuation">&gt;</span>
                        <br />
                      </div>
                      <div className="cm-line bg-github-highlight ml-20 dark:bg-opacity-10">
                        {' '}
                        <span className="sp-syntax-punctuation">&lt;</span>
                        <span className="text-teal-500">Active</span>
                        <span className="text-teal-500">GymMembers</span>
                        <span className="px-0">=</span>
                        <span className="sp-syntax-punctuation">{'{'}</span>
                        <span className="text-indigo-500">clockedInUsers</span>
                        <span className="sp-syntax-punctuation">{'}'}</span>
                        <span className="sp-syntax-punctuation">/&gt;</span>
                        <br />
                      </div>
                      <div className="cm-line ">
                        {' '}
                        <span className="sp-syntax-punctuation pl-10">
                          &lt;/
                        </span>
                        <span className="sp-syntax-tag text-yellow-500">
                          div
                        </span>
                        <span className="sp-syntax-punctuation">&gt;</span>{' '}
                        <span className="sp-syntax-punctuation">)</span>
                        <span className="sp-syntax-punctuation">;</span>
                      </div>
                      <div className="cm-line ">
                        <span className="sp-syntax-punctuation">{'}'}</span>
                      </div>
                    </span>
                  </div>
                  <span class="[text-[#7dd3fc]]">return (</span>
                  &lt;<span class="text-indigo-400">form</span> action=&quot;/
                  <span class="text-emerald-300">notification-settings</span>
                  &quot; method=&quot;
                  <span class="code-yellow">POST</span>&quot; <br />
                  <span class="text-white">&lt;</span>
                  <span class="text-indigo-400">Switch </span>checked=
                  {<span class="text-[#7dd3fc]">enabled</span>} onChange=
                  {<span class="text-[#7dd3fc]">setEnabled</span>} name=&quot;
                  <span class="text-emerald-300">notifications</span>&quot;
                  <br />
                  {
                    <span class="text-gray-500">
                      &quot;/* .<span class="text-yellow-200/60">...</span>
                      ..*/&quot;
                    </span>
                  }
                  <br />
                  &lt;/
                  <span class="text-indigo-400">Switch</span>&gt; &lt;
                  <span class="text-red-400">button&gt;</span>
                  &gt;<span class="text-yellow-400">Submit</span>&lt;/
                  <span class="text-red-400">button</span>&gt; &lt;/
                  <span class="text-indigo-400">
                    <span class="sp-syntax-punctuation">&lt; &lt;</span>form
                  </span>
                  &gt;)
                  <br />
                  <span class="text-indigo-400"></span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
        aria-hidden="true"
      />
    </>
  )
  // </div>
}
