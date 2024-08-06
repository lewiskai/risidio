import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { setProfileData, useUpdateAvatarUrlMutation } from "../store/profile";
import { useSelector } from "react-redux";
import { useSelectAccessToken } from "../store/auth";

const CharacterCreation = () => {
  const navigate = useNavigate();
  const subdomain = import.meta.env.VITE_APP_RPM_DOMAIN
  const iFrameRef = useRef(null)
  const [avatarUrl, setAvatarUrl] = useState('')
  const [showIFrame, setShowIFrame] = useState(true)
  const [requestUpdateAvatarUrl] = useUpdateAvatarUrlMutation();
  const accessToken = useSelector(useSelectAccessToken);

  const subscribe = (event: any) => {
    const json = parse(event)
    if (json?.source !== 'readyplayerme') {
      return;
    }
    // Subscribe to all events sent from Ready Player Me 
    // once frame is ready
    if (json.eventName === 'v1.frame.ready') {
      const iFrame = iFrameRef.current
      // @ts-ignore
      if (iFrame && iFrame.contentWindow) {
        // @ts-ignore
        iFrame.contentWindow.postMessage(
          JSON.stringify({
            target: 'readyplayerme',
            type: 'subscribe',
            eventName: 'v1.**'
          }),
          '*'
        );
      }
    }
    // Get avatar GLB URL
    if (json.eventName === 'v1.avatar.exported') {
      setAvatarUrl(json.data.url)
      setShowIFrame(false);
    }
    // Get user id
    if (json.eventName === 'v1.user.set') {
      console.log(`User with id ${json.data.id} set: ${JSON.stringify(json)}`);
    }
  }

  const parse = (event: any) => {
    try {
      return JSON.parse(event.data);
    } catch (error) {
      return null;
    }
  }

  const updateAvatarInProfile = () => {
    const credentials = {
      body: { avatar: { url: avatarUrl } },
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    requestUpdateAvatarUrl(credentials)
      .unwrap()
      .then((res) => {
        setProfileData({ userData: res.data });
      });
  };

  useEffect(() => {
    const iFrame = iFrameRef.current
    if (iFrame) {
      // @ts-ignore
      iFrame.src = `https://${subdomain}.readyplayer.me/avatar?frameApi`
    }
  }, [])

  useEffect(() => {
    window.addEventListener('message', subscribe)
    document.addEventListener('message', subscribe)
    return () => {
      window.removeEventListener('message', subscribe)
      document.removeEventListener('message', subscribe)
    }
  }, []);

  useEffect(() => {
    if (avatarUrl) {
      updateAvatarInProfile();
      navigate("/onboarding");
    }
  }, [avatarUrl]);

  return (
    <div className="rpm-override">
      <iframe
        allow="camera *; microphone *"
        id="frame"
        ref={iFrameRef}
        style={{ display: `${showIFrame ? 'block' : 'none'}` }}
        title={"Ready Player Me"}
      />
    </div>
  );
}

export default CharacterCreation;
