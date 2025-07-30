import { useDogStore } from "@/store/dogStore";
import PrimaryButton from "../../buttons/primary-button";

export default function DownloadFileButton() {
        const { toJson } = useDogStore()

    const downloadFile =() => {   
        const blob = new Blob([toJson()], { type: 'text/json' })
        const a = document.createElement('a');
        a.download = `dogs-${new Date().toISOString().replace(".", '-')}.json`
        a.href = window.URL.createObjectURL(blob);
        a.click()
        a.remove()
    }

        return (
            <>
                <PrimaryButton onPress={downloadFile} label="Export As JSON" />
            </>
        );

}