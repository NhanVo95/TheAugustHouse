import { Suspense, ReactNode } from 'react'

function Skeleton({ className }: { className: string }) {
  return (
    <div
      className={`bg-slate-200 motion-safe:animate-pulse rounded ${className}`}
    />
  )
}

const TAH_Skeleton = ({
  children,
  className
}: {
  children: ReactNode
  className: string
}) => {
  return (
    <Suspense fallback={<Skeleton className={className} />}>
      {children}
    </Suspense>
  )
}

export default TAH_Skeleton
