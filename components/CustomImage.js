import Image from 'next/image'

export default function CustomImage(props) {

  return (
    <figure className="m-0">
      <div className="m-w-full inline-block mx-auto">
        <Image
          alt={props.alt}
          src={props.src}
          className="block text-center"
          {...props}
        />  
      </div>
      <figcaption className="w-full inline-block opacity-50 italic text-sm text-center">
        {props.alt}
      </figcaption>
    </figure>
  )
}
