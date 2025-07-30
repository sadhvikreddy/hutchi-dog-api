import { Card } from "@heroui/card";

export default function DogCard({ children }) {
    return <Card
        radius="sm"
        shadow="sm"
        className="m-2 p-4 bg-trasparent backdrop-blur-sm border-blue-50 border-1">
        {children}
    </Card>
}