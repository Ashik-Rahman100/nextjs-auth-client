import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session?.user);

  return (
    <div>
      {session?.user && (
        <>
          <Image
            src={session?.user?.image || ""}
            height={100}
            width={100}
            alt="User email"
            className="rounded-full mx-auto mt-5"
          ></Image>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h4 className="text-4xl text-center mt-10">
            Logged in user Email : {session?.user?.email}
          </h4>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
