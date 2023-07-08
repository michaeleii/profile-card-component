function ProfileInfo({
  name,
  age,
  location,
}: {
  name: string;
  age: number;
  location: string;
}) {
  return (
    <>
      <h1 className="font-bold text-lg mb-2 mt-5 text-secondary-700">
        {name} <span className="font-normal text-secondary-500">{age}</span>
      </h1>
      <h2 className="mb-5 text-sm">{location}</h2>
    </>
  );
}
export default ProfileInfo;
