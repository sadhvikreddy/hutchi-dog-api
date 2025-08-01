import { addToast } from "@heroui/toast";

export default function successToast(message: string) {
    return addToast({
        title: "BOW! That Worked!",
        description: message,
        color: 'success',

    });
}