import { Button, PressEvent } from "@heroui/button"
import { Tooltip } from "@heroui/react"
import clsx from "clsx"

export interface SubmitButtonProps {
    label: string,
    tooltipText: string,
    className: string
}

export default function SubmitButton({ label, tooltipText, className }: SubmitButtonProps) {
    return <Tooltip content={tooltipText} showArrow>
        <Button
            type="submit"
            color="primary"
            variant="solid"
            className={clsx(className, "h-12")}
        >
            <p>{label}</p>
        </Button>
    </Tooltip>
}