import { Button, PressEvent } from "@heroui/button"
import { Tooltip } from "@heroui/react"
import { Plus, Trash2 } from 'lucide-react'

export interface SecondaryButtonProps {
    onPress: (e: PressEvent) => void,
    tooltip: string
}

export default function SecondaryButton({ onPress, tooltip }: SecondaryButtonProps) {
    return (
        <Tooltip content={tooltip} showArrow color="success" >
            <Button
                color="success"
                variant="flat"
                radius="sm"
                onPress={onPress}
                isIconOnly
            >
                <Plus />
            </Button>
        </Tooltip>
    )
}