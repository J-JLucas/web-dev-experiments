import "./style.css";
import { getToken } from "../../common/spotifyAuth.js";

const accessToken = await getToken();

const profile = await fetchProfile(accessToken);
console.log(profile);
populateUI(profile);

async function fetchProfile(token) {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return await result.json();
}

function populateUI(profile) {
  document.getElementById("displayName").innerText = profile.display_name;
  if (profile.images[0]) {
    const profileImage = new Image(200, 200);
    profileImage.src = profile.images[0].url;
    document.getElementById("avatar").appendChild(profileImage);
    document.getElementById("imgUrl").innerText = profile.images[0].url;
    document.getElementById("imgUrl").setAttribute("href", profile.images[0].url);
  }
}
