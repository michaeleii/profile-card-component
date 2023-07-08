import { useEffect, useState } from "react";
import ProfileCard, { Profile } from "./components/ProfileCard";

const stats = [
  {
    label: "Followers",
    value: "80K",
  },
  {
    label: "Likes",
    value: "803K",
  },
  {
    label: "Photos",
    value: "1.4K",
  },
];

const defaultProfile: Profile = {
  name: "Victor Crest",
  age: 26,
  location: "London",
  profileImage: "/image-victor.jpg",
  stats,
};

function App() {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    async function fetchProfile() {
      try {
        setIsLoading(true);
        const res = await fetch("https://randomuser.me/api/", {
          signal: controller.signal,
        });
        const { results } = (await res.json()) as {
          results: {
            name: { first: string; last: string };
            picture: { medium: string };
            dob: { age: number };
            location: { city: string };
          }[];
        };
        const [randomUser] = results;
        const newProfile: Profile = {
          name: `${randomUser.name.first} ${randomUser.name.last}`,
          profileImage: randomUser.picture.medium,
          age: randomUser.dob.age,
          location: randomUser.location.city,
          stats,
        };
        setProfile(newProfile);
      } catch (error) {
        if (error instanceof Error) console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProfile()
      .then()
      .catch((err) => console.error(err));
    return () => controller.abort();
  }, []);

  return (
    <div className="min-h-screen min-w-full flex justify-center items-center p-5  relative bg-primary-500 bg-no-repeat before:bg-no-repeat  before:bg-bg-pattern-top before:fixed before:bottom-[50%] before:left-0 before:h-screen before:w-full after:bg-bg-pattern-bottom after:fixed after:bottom-[-50%] after:right-[-50%] after:h-screen after:w-full after:bg-no-repeat">
      <ProfileCard profile={profile} isLoading={isLoading} />
    </div>
  );
}
export default App;
