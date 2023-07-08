import ProfileStatItem from "./ProfileStatItem";

function ProfileStats({
  stats,
}: {
  stats: { label: string; value: string }[];
}) {
  return (
    <div className="flex items-center justify-around gap-5 p-10 border-t-2">
      {stats.map((stat) => (
        <ProfileStatItem key={stat.label} stat={stat} />
      ))}
    </div>
  );
}
export default ProfileStats;
