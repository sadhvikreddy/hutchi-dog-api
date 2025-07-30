import { Spinner } from "@heroui/spinner";

export default function Loading() {
    return (
        <div className="top-1/2 left-1/2 translate-y-1/2 text-center">
          <Spinner />
          <p>Fetching Data from Database. <br/>
            Could sometimes take upto a minute.</p>
        </div>
    )
}