import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils/cn"

import { commonControlClasses } from "../../../tailwind/ui/Checkbox"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      commonControlClasses,
      "w-[26px] rounded-full bg-body-medium p-px hover:border-primary-hover hover:bg-primary-hover data-[state=unchecked]:disabled:bg-transparent data-[state=checked]:hover:not-disabled:border-primary-hover",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block size-3 rounded-full bg-background transition-transform data-[state=checked]:translate-x-2.5 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:data-[disabled]:border data-[state=unchecked]:data-[disabled]:border-disabled"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export default Switch
