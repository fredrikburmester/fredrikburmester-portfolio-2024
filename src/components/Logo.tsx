import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className="flex aspect-square w-48 items-center justify-center overflow-hidden rounded-full">
      <Image
        src="/images/pp2.jpg"
        alt="Logo"
        className="w-full object-cover"
        width={100}
        height={100}
      />
    </div>
  )
}
