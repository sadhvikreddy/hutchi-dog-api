import { Button, PressEvent } from "@heroui/button"
import { Trash2 } from 'lucide-react'

export interface DeleteButtonProps {
    onPress: (e: PressEvent) => void
}

export default function DeleteButton({ onPress }: DeleteButtonProps) {
    return <Button
        color="danger"
        variant="light"
        onPress={onPress}
        isIconOnly
    >
        <Trash2 />
    </Button>
}