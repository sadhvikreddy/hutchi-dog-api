import { Button, PressEvent } from "@heroui/button"
import { Tooltip } from "@heroui/react"
import { Trash2 } from 'lucide-react'

export interface DeleteButtonProps {
    onPress: (e: PressEvent) => void,
    tooltip: string
}

export default function DeleteButton({ onPress, tooltip }: DeleteButtonProps) {
    return (
        <Tooltip content={tooltip} showArrow color="danger">
            <Button
                color="danger"
                variant="flat"
                onPress={onPress}
                radius="sm"
                isIconOnly
            >
                <Trash2 />
            </Button>
        </Tooltip>
    );
}