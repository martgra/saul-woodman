import Container from '@/app/_components/container'

export function Footer() {
  return (
    <footer className="border-neutral-200 bg-neutral-50 dark:bg-slate-800">
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4"></div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
