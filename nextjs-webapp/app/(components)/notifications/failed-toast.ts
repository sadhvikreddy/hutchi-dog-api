import { addToast } from "@heroui/toast";

export default function failedToast() {
    return addToast({
        title: "Oops, something failed while that Operation.",
        description: ` Please try again`,
        color: 'danger',
        timeout: 2000
    });
}