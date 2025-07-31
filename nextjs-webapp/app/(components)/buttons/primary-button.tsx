import { Button, PressEvent } from "@heroui/button"
import { Tooltip } from "@heroui/react"

export interface PrimaryButtonProps {
    label: string,
    onPress: (e: PressEvent) => void,
    tooltipText: string
}

export default function PrimaryButton({ label, onPress, tooltipText }: PrimaryButtonProps) {
    return <Tooltip content={tooltipText} showArrow>
        <Button
            color="primary"
            variant="solid"
            onPress={onPress}
            className="h-12 w-48"
        >
            <p>{label}</p>
        </Button>
    </Tooltip>
}