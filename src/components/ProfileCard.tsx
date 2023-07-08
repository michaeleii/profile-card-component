import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import ProfileStats from "./ProfileStats";

export interface Profile {
  name: string;
  profileImage: string;
  age: number;
  location: string;
  stats: {
    label: string;
    value: string;
  }[];
}

function ProfileCard({
  profile,
  isLoading,
}: {
  profile: Profile | undefined;
  isLoading: boolean;
}) {
  return (
    <div className="text-center bg-slate-50 text-secondary-500 rounded-xl drop-shadow-lg  before:bg-card-pattern relative before:w-full before:h-[36%] before:absolute before:top-0 before:left-0 before:rounded-t-xl w-full max-w-sm z-10">
      {isLoading && (
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
      )}
      {!isLoading && profile && (
        <>
          <ProfileImage image={profile.profileImage} />
          <ProfileInfo
            name={profile.name}
            age={profile.age}
            location={profile.location}
          />
          <ProfileStats stats={profile.stats} />
        </>
      )}
    </div>
  );
}
export default ProfileCard;
