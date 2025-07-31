import { Card } from "@heroui/card";

export default function DogCard({ children }) {
    return <Card
        radius="sm"
        shadow="sm"
        className="mx-2 my-2 p-4 md:mx-4 md:my-2 md:p-4 bg-trasparent backdrop-blur-sm border-blue-50 border-1">
        {children}
    </Card>
}