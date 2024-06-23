import Settings from "./settings";

const ProfilePage = () => {
  return (
    // this page will contain the user's profile information
    //
    // The user can select which cards they have that might provide lounge access (plat, cap1, chase, priority pass, etc)
    // The user can link their pro account to discord
    // The user can change email, password, etc

    // Ideally, this will be done w/ server actions or API routes via checks, toggles, etc
    <div>
      <h1>Profile</h1>
      <p>
        Adjust your personal profile by setting what cards and programs you
        have, making finding accessible lounges a breee.
      </p>

      <Settings />
    </div>
  );
};

export default ProfilePage;
