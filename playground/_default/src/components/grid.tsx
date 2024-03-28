import clsx from "clsx"

const gaps = [
  "xxs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "xxl",
  "y-xxs",
  "y-xs",
  "y-sm",
  "y-md",
  "y-lg",
  "y-xl",
  "y-xxl",
  "x-xxs",
  "x-xs",
  "x-sm",
  "x-md",
  "x-lg",
  "x-xl",
  "x-xxl",
] as const

const flexs = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  "full",
  "auto",
  "none",
] as const

export const gridPatterns = {
  gaps,
}

export const columnPatterns = {
  flexs,
}

export type GridProps = {
  className?: string
  gap?: (typeof gaps)[number]
  isStretch?: boolean
  style?: React.CSSProperties
  children?: React.ReactNode
}

export type ColumnProps = {
  className?: string
  flex?: (typeof flexs)[number]
  fabletFlex?: (typeof flexs)[number]
  tabletFlex?: (typeof flexs)[number]
  desktopFlex?: (typeof flexs)[number]
  wideFlex?: (typeof flexs)[number]
  style?: React.CSSProperties
  children?: React.ReactNode
}

export function Grid({ className, gap, isStretch, children }: GridProps) {
  return (
    <div
      className={clsx(
        "grid",
        gap && `is-gap-${gap}`,
        isStretch && "is-stretch",
        className && className
      )}
    >
      {children}
    </div>
  )
}

export function Column({
  className,
  flex,
  fabletFlex,
  tabletFlex,
  desktopFlex,
  wideFlex,
  children,
}: ColumnProps) {
  const hasFlex = flex !== undefined && flex !== null
  const hasFabletFlex = fabletFlex !== undefined && fabletFlex !== null
  const hasTabletFlex = tabletFlex !== undefined && tabletFlex !== null
  const hasDesktopFlex = desktopFlex !== undefined && desktopFlex !== null
  const hasWideFlex = wideFlex !== undefined && wideFlex !== null
  return (
    <div
      className={clsx(
        "column",
        hasFlex && `is-flex-${flex}`,
        hasFabletFlex && `fablet:is-flex-${fabletFlex}`,
        hasTabletFlex && `tablet:is-flex-${tabletFlex}`,
        hasDesktopFlex && `desktop:is-flex-${desktopFlex}`,
        hasWideFlex && `wide:is-flex-${wideFlex}`,
        className && className
      )}
    >
      {children}
    </div>
  )
}