import Image from 'next/image'

import MyDoodle from '@io/images/doodle.png'

const MyDoodleLoader = () => {

  return (
    <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-600 rounded-full animate-pulse">
      {/* <span className="animate-spin">⌛</span> */}
      <Image
        src={MyDoodle}
        alt="My Doodle by Maetschl Cartoons"
        priority={true}
        placeholder="blur"
        layout="intrinsic"
        className="opacity-0"
        width="512"
        height="512"
      />
    </div>
  )
}

export default MyDoodleLoader