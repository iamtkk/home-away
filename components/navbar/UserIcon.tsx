import { LuUser2 } from "react-icons/lu";
import { fetchProfileImage } from "@/utils/actions";

const UserIcon = async () => {
  const profileImage = await fetchProfileImage();
  if (profileImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className="w-6 h-6 rounded-full object-cover"
        src={profileImage}
        alt="profileImage"
      />
    );
  }
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
};
export default UserIcon;
