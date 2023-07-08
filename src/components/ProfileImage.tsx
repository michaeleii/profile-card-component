function ProfileImage({ image }: { image: string }) {
  return (
    <img
      src={image}
      alt=""
      className="rounded-full border-4 border-white mx-auto mt-24 relative"
    />
  );
}
export default ProfileImage;
