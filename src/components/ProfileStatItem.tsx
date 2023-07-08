function ProfileStatItem({ stat }: { stat: { label: string; value: string } }) {
  return (
    <div>
      <h3 className="font-bold text-lg text-secondary-700">{stat.value}</h3>
      <p className="tracking-widest text-xs">{stat.label}</p>
    </div>
  );
}
export default ProfileStatItem;
