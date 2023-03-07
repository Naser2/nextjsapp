import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import VideoPlayer from './VideoPlayer'


export default function VideoPlayerDialog() {
  const [open, setOpen] = useState(true)
  console.log(`VideoPlayerDialog-LOADED`)

  return (
    <Transition.Root show={open} as={Fragment} unmount={false} className="VideoPlayerDialog fixed inset-0 bg-indigo-500">
      <Dialog as="div" open={open} onClose={setOpen}>
        <VideoPlayer shouldPlay={open} />
      {/* <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title> */}
        {/* <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description> */}

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        {/* <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button> */}
      {/* </Dialog.Panel> */}
        {/* ... */}
        
        {/* ... */}
      </Dialog>
    </Transition.Root>
  )
}