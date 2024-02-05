import Link from 'next/link'

type SocialButtonProps = {
  Icon: React.ElementType
  backgroundColor: string
  pathname: string
}

const SocialButton = (props: SocialButtonProps) => {
  return (
    <Link
      href={props.pathname}
      target="_blank"
      rel="noreferrer"
      className="fill-bx-white-50 max-w-[7.5rem] w-full h-11 rounded-md flex items-center justify-center"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <props.Icon className="h-6 w-6" />
    </Link>
  )
}

export default SocialButton
