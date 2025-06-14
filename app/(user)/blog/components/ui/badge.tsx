import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/app/(user)/blog/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-red-100 text-red-900 hover:bg-red-200",
        secondary: "border-transparent bg-red-200 text-red-900 hover:bg-red-300",
        destructive: "border-transparent bg-red-500 text-red-50 hover:bg-red-600",
        outline: "text-red-900 border-red-200 hover:bg-red-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }

