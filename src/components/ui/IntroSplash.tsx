import Image from "next/image";

// Plays once per browser session (see the inline script in layout.tsx).
// Pure CSS animation: logo fades in, services line appears, then the whole
// overlay fades out at ~2.2s and stops blocking clicks.
export function IntroSplash() {
  return (
    <div className="intro-splash" aria-hidden>
      <div className="intro-inner">
        <Image src="/logo-str.PNG" alt="" width={170} height={150} loading="eager" className="intro-logo" />
        <p className="intro-name">STR Invitations</p>
        <p className="intro-services">Video Invitations · Invitation Websites · RIP Tribute Videos</p>
        <span className="intro-line" />
      </div>
    </div>
  );
}

export const introScript = `try{var d=document.documentElement;if(sessionStorage.getItem("str-intro")||matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("intro-seen")}else{sessionStorage.setItem("str-intro","1");setTimeout(function(){d.classList.add("intro-seen")},3200)}}catch(e){document.documentElement.classList.add("intro-seen")}`;
