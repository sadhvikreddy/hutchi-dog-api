import { Button, PressEvent } from "@heroui/button"
import { Tooltip } from "@heroui/react"
import { CrossIcon, Trash2, X } from 'lucide-react'

export interface CloseButtonProps {
    onPress: (e: PressEvent) => void
}

export default function CloseButton({ onPress }: CloseButtonProps) {
    return (
            <Button
                color="danger"
                variant="light"
                onPress={onPress}
                radius="sm"
                isIconOnly
            >
                <X />
            </Button>
    );
}