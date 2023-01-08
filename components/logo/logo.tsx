import { Link } from '@ui/link/link'

export function LogoSymbol() {
  return (
    <svg
      viewBox="0 0 33 31"
      className="fill-current text-brand-nebula w-8 h-auto can-hover:transition-colors can-hover:hover:text-nebula-light"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="#"
      />
    </svg>
  )
}

export type LogoProps = Record<string, unknown>

export function Logo() {
  return (
    <Link href="/" tabIndex={0} title="Amazon" className="group">
      <img src='/static/images/socials/og.png' 
        className="w-full h-auto max-w-[9rem] laptop:max-w-none laptop:w-48"
      />
    </Link>
  )
}
