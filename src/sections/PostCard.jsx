import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const PostCard = () => {

    const videoRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.post-card',
                start: 'top center',
                end: 'bottom center',
                scrub: true
            }
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut'} , '<')
        }
    }, [])

  return (
    <section className="post-card">
        <div className="animated-gradient-bg" />
        <div className="post-card-wrapper group hover:rotate-1 hover:=-[1.02] duration-700 transition">
            <img src="/images/overlay.webp" alt="post-card" />
            <video 
             src="/videos/postcard-vd.mp4"
             ref={videoRef}
             muted
             playsInline
             preload="auto"
             />
             <button className="group-hover:bg-yellow transition duration-700">
                Exolore Leonida Keys
             </button>
        </div>
    </section>
  )
}

export default PostCard