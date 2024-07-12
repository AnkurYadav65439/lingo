'use client'
import { courses, userProgress } from "@/db/schema"
import Card from "./card";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner"

type Props = {
    courses: typeof courses.$inferSelect[];
    activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
}

const List = ({ courses, activeCourseId }: Props) => {
    const [pending, startTransition] = useTransition();
    const router = useRouter();

    const onClick = (id: number) => {
        if (pending) return;      //though not needed

        if (id === activeCourseId) {
            router.push("/learn");
        } else {
            startTransition(() => {
                upsertUserProgress(id)
                    .catch((err) => toast.error(err.toString()));
            })
        }
    }

    return (
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {courses.map((course) => (
                <Card
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    imageSrc={course.imageSrc}
                    onClick={onClick}
                    disabled={pending}
                    active={course.id === activeCourseId}
                />
            ))}
        </div>
    )
}

export default List