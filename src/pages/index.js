import CreateTeam from "@/components/create-team";
import CreateTask from "@/components/create-task";

export default function Home() {
  return(
    <div className="h-screen w-full flex justify-center items-center">
      <CreateTask/>
    </div>
  )
}
