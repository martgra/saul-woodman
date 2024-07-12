import Logo from '../../../public/assets/its_all_wood.svg'
import SaulWoodman from '../../../public/assets/saul_woodman_straight.svg'

export function Intro() {
  return (
    <section className="mb-16 mt-16 flex w-full flex-col items-center md:mb-12">
      <div className="flex w-full flex-col items-center">
        <Logo className="h-auto w-full" />
        <div className="flex w-full justify-end">
          <SaulWoodman className="h-auto w-1/3" />
        </div>
      </div>
    </section>
  )
}
