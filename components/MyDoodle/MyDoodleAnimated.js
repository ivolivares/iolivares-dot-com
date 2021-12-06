/**
 * Original draw by Maetschl Cartoons
 * @see https://www.instagram.com/maetschl.cartoons
*/
import Image from 'next/image'

import MyDoodle from '@io/images/doodle.png'
import MyDoodlePath from '@io/components/MyDoodle/doodleSVG'

const MyDoodleAnimated = () => (
  <div id="mydoodleanimated" className="relative flex justify-center items-center dark:bg-gray-300 rounded-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 1024 1024"
      version="1.1"
      className="max-w-prose w-full h-auto absolute justify-center items-center"
    >
      <path
        id="mydoodleface"
        fill="none"
        stroke="none"
        fillRule="evenodd"
        className="stroke-current text-gray-800"
        d={MyDoodlePath} />
    </svg>
    <Image
      id="mydoodleface-draw"
      src={MyDoodle}
      alt="My Doodle by Maetschl Cartoons"
      layout="intrinsic"
      placeholder="blur"
      width="512"
      height="512"
      className="absolute flex justify-center items-center"
    />
    <div id="eyes" className="absolute flex justify-between">
      <div id="eye" className="absolute bg-white flex items-center justify-center rounded-lg">
        <div id="iris" className="bg-black rounded-full"></div>
      </div>
      <div id="eye" className="absolute bg-white flex items-center justify-center rounded-lg">
        <div id="iris" className="bg-black rounded-full"></div>
      </div>
    </div>
  </div>
)

export default MyDoodleAnimated