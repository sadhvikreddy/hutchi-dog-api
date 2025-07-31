import { Button, PressEvent } from "@heroui/button"
import { Tooltip } from "@heroui/react"
import clsx from "clsx"

export interface ResetButtonProps {
    label: string,
    tooltipText: string,
    className: string
}

export default function SubmitButton({ label, tooltipText, className }: ResetButtonProps) {
    return <Tooltip content={tooltipText} showArrow>
        <Button
            type="reset"
            color="warning"
            variant="ghost"
            className={clsx(className,
                "h-12")}
        >
            <p>{label}</p>
        </Button>
    </Tooltip>
}