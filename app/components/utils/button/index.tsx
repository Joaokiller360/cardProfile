import Link from "next/link"

interface LogoProps {
  hrf?: string;
  text?: string;
}

export function Button({ hrf = '', text = '' }: LogoProps) {
  return (
    <div>
      <Link
        href={hrf}
        className='group relative inline-flex items-center overflow-hidden px-8 py-3 text-base font-medium border-2 text-colorButton border-colorButton hover:bg-colorButton hover:text-white rounded-2xl transition-all'
      >
        <span className='absolute -end-full transition-all group-hover:end-4'>
          <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16l-4-4m0 0l4-4m-4 4h18' />
          </svg>
        </span>
        <span className='transition-all group-hover:me-4'>{text}</span>
      </Link>
    </div>

  )
}

interface ButtonNavProps {
  hrf?: string;
  text?: string;
  icon?: React.ReactNode;
}

export function ButtonNav({ hrf = '', text = '', icon }: ButtonNavProps) {
  return (
    <div>
      <Link
        href={hrf}
        style={{ display: 'flex', alignItems: 'center', gap: '8px' }} // Estilos directamente en el Link
      >
        {icon && <span>{icon}</span>}
        <span className="hidden sm:inline">{text}</span>
      </Link>
    </div>
  );
}