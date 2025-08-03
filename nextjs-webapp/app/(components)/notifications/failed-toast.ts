import { addToast } from "@heroui/toast";

export default function failedToast(message?: string) {
    return addToast({
        title: "Oops, something failed while that Operation.",
        description: message ??  `Please try again`,
        color: 'danger',
        timeout: 2000
    });
}