import { Button, PressEvent } from "@heroui/button"

export interface PrimaryButtonProps {
    label: string,
    onPress: (e: PressEvent) => void
}

export default function PrimaryButton({ label, onPress }: PrimaryButtonProps) {
    return <Button
        color="primary"
        variant="solid"
        onPress={onPress}
        className="h-12 w-48"
    >
        <p>{label}</p>
    </Button>
}